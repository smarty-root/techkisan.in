import React from "react";
import { color, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-14 bg-[#eaeaea]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First section */}
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="space-y-4 max-w-[300px] text-dark2"
          >
            <h1 className="text-2xl font-bold text-black" style={{color:"black"}}>Contact Info</h1>
            <p>
              <strong className="text-green-600 font-semibold">Head Office: </strong>
              <span itemProp="streetAddress" style={{color:"black"}} className="font-light" >
                <b>Techkisan Automation</b> <br></br>
                Nakade Complex, Near Sai Mandir, Mama Chowk, Gondia
              </span>
              ,<br />
    
              <span itemProp="addressRegion" style={{color:"black"}} className="font-light">Maharashtra,</span>{" "}
              <span itemProp="postalCode" style={{color:"black"}} className="font-light">India</span> -{" "}
              <span itemProp="addressCountry" style={{color:"black"}} className="font-light">441601</span>
            </p>
            <p>
              <strong className="text-green-600 font-medium">Telephone: </strong>
              <span itemProp="telephone" style={{color:"black"}} className="font-light">7972025213, 9511831914</span>
            </p>
            <p>
              <strong className="text-green-600 font-medium">Email: </strong>
              <span itemProp="email">
                <a
                  href="mailto:info@techkisan.in"
                  className="text-primary hover:underline font-light"
                  style={{color:"black"}}
                >
                  tkn.automation@gmail.com
                </a>
                ,{" "}
                <a
                  href="mailto:sales@techkisan.in"
                  className="text-primary hover:underline font-light"
                  style={{color:"black"}}
                >
                  hr@techkisan.in
                </a>
              </span>
            </p>
            <p>
              <strong className="text-green-600 font-medium">Services In: </strong>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline font-light" style={{color:"black"}}>
                Maharashtra
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline font-light" style={{color:"black"}}>
                Madhya Pradesh
                </a>
              </span>
              <span> | </span>
              <span itemProp="sub-offices">
                <a href="#" className="text-primary hover:underline font-light" style={{color:"black"}}>
                Chhattisgarh
                </a>
              </span>
            </p>
          </div>

          {/* Second section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Links</h1>
            <div className="text-dark2">
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/services/automation">Automation Services</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/services/solar">Solar Services</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/services/security">Security Solutions</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/services/it">IT Services</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/aboutus">About</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200"  style={{color:"black"}}>
                  <a href="/contactus">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-black">Location on Map</h1>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29706.876869484528!2d80.2042816!3d21.4544021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ba92f8a12e471%3A0x8685529359bb82f8!2sTechkisan%20Automation!5e0!3m2!1sen!2sin!4v1705585445560!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center"><span className="text-green-700">Techkisan Automation </span>- All Rights Reserved. © 2025</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
