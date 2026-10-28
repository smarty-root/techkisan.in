const queryModel = require("../models/query-model");
const nodemailer = require("nodemailer");

module.exports.QueryEmails = async (req, res) => {
    try {
        // Save query to database
        const query = new queryModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            enquiry: req.body.enquiry,
            description: req.body.description
        });
        await query.save();

        // Configure Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Self-email (TechKisan Automation)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Customer Query - ${req.body.name}`,
            html: `
                <h2>New Customer Inquiry</h2>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Phone:</strong> ${req.body.phone}</p>
                <p><strong>Enquiry:</strong> ${req.body.enquiry}</p>
                <p><strong>Description:</strong> ${req.body.description}</p>
                <p>Please check the database for more details.</p>
                <p>Regards,<br><strong>TechKisan Automation</strong></p>
            `
        };

        // Thank-you email to the customer
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "Thank You for Contacting TechKisan Automation!",
            html: `
                <h2>Hello ${req.body.name},</h2>
                <p>Thank you for reaching out to <strong>TechKisan Automation</strong>. We have received your inquiry and will get back to you shortly.</p>
                <p><strong>Your Query Details:</strong></p>
                <ul>
                    <li><strong>Enquiry:</strong> ${req.body.enquiry}</li>
                    <li><strong>Description:</strong> ${req.body.description}</li>
                </ul>
                <p>For urgent queries, you can contact us at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>.</p>
                <p>Best Regards,<br><strong>TechKisan Automation Team</strong></p>
            `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).send("Emails sent successfully");
    } catch (e) {
        console.error("Error sending emails:", e);
        res.status(500).send("Failed to send emails");
    }
};
