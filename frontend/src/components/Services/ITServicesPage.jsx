import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import itservices from "../../assets/it-services.jpg";
import { Helmet } from "react-helmet";
// Images
import webdesign from "../../assets/web-design.jpg";
import software from "../../assets/software-development.jpeg";
import website from "../../assets/Website-development-services.png";
import cybersecurity from "../../assets/cybersecurity-solutions.png";
import consulting from "../../assets/it-consultancy-strategy.png";
import ai from "../../assets/ai-solutions.jpg";
import data from "../../assets/data-management.jpeg";
import cloud from "../../assets/cloudcomputing.jpg";

const services = [
  {
    title: "Web Design",
    id: "webdesign",
    description: "Our web design services create visually stunning, user-friendly websites that reflect your brand and engage your audience.",
    image: webdesign,
    alt: "Responsive Web Design Illustration",
    features: [ "Responsive Design", "SEO Optimization", "User-Centric", "Fast Loading", "Mobile-Friendly", "Customizable Layouts" ],
  },
  {
    title: "Software Development",
    id: "softwaredevelopment",
    description: "Our software development services provide custom solutions tailored to your business needs.",
    image: software,
    alt: "Custom Software Development",
    features: [ "Custom Solutions", "Scalable Architecture", "User-Friendly Interface", "Cross-Platform Compatibility", "Secure Coding", "Continuous Support" ],
  },
  {
    title: "Website Development",
    id: "webdevelopment",
    description: "Techkisan Automation offers comprehensive website development services that combine creativity and functionality.",
    image: website,
    alt: "Website Development Services",
    features: [ "Responsive Design", "SEO Optimized", "Custom Development", "Fast Loading Speed", "User-Friendly Interface", "Secure Architecture" ],
  },
  {
    title: "Cybersecurity Solutions",
    id: "cybersecurity",
    description: "Our cybersecurity solutions protect your business from digital threats, ensuring data security and integrity.",
    image: cybersecurity,
    alt: "Cybersecurity Data Protection",
    features: [ "Threat Detection", "Data Encryption", "Real-Time Monitoring", "Firewall Protection", "Vulnerability Assessment", "Incident Response" ],
  },
  {
    title: "IT Consulting and Strategy",
    id: "itconsulting",
    description: "Our IT consulting and strategy services help businesses align technology with their objectives to drive growth and efficiency.",
    image: consulting,
    alt: "IT Consulting Strategy",
    features: [ "Technology Roadmap", "Strategic Planning", "Infrastructure Optimization", "Process Automation", "IT Alignment", "Risk Management" ],
  },
  {
    title: "AI Solutions",
    id: "ai",
    description: "Techkisan Automation offers cutting-edge AI solutions designed to transform your business operations.",
    image: ai,
    alt: "Artificial Intelligence for Business",
    features: [ "Machine Learning", "Data Analytics", "Predictive Insights", "Intelligent Automation", "Custom AI Models", "Real-Time Decision-Making" ],
  },
  {
    title: "Data Management",
    id: "datamanagement",
    description: "Our data management services help businesses organize, store, and analyze vast amounts of data securely and efficiently.",
    image: data,
    alt: "Secure Data Management Systems",
    features: [ "Data Storage Solutions", "Data Integration", "Data Security", "Real-Time Analytics", "Backup & Recovery", "Compliance Management" ],
  },
  {
    title: "Cloud Computing",
    id: "cloudcomputing",
    description: "Our cloud computing services provide scalable, flexible, and secure solutions for businesses.",
    image: cloud,
    alt: "Cloud Infrastructure and Services",
    features: [ "Scalable Infrastructure", "Cost-Effective Solutions", "Remote Accessibility", "Data Backup & Recovery", "High Security", "Easy Integration" ],
  },
];

const ITServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      {/* Parallax Section */}
      <Helmet>
        <title>IT Services | Techkisan Automation</title>
        <meta
          name="description"
          content="Explore our IT services including web design, software development, AI solutions, and cybersecurity tailored for your business."
        />
        <meta
          name="keywords"
          content="IT Services, Web Design, Software Development, AI, Cybersecurity, Techkisan Automation"
        />
        <link rel="canonical" href="https://www.techkisan.com/itservices" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="IT Services | Techkisan Automation" />
        <meta
          property="og:description"
          content="Professional IT solutions by Techkisan: Web design, software development, AI integration, and cybersecurity tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://www.techkisan.com/assets/itservices.jpg"  // 🔁 Change this if you have a specific OG image
        />
        <meta property="og:url" content="https://www.techkisan.com/itservices" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description":
              "Custom IT solutions including web development, software, AI, and cybersecurity for startups and businesses.",
            "provider": {
              "@type": "Organization",
              "name": "Techkisan Automation",
              "url": "https://www.techkisan.com",
            },
            "serviceType": "Web Development, AI Solutions, Software Development, Cybersecurity",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "url": "https://www.techkisan.com/itservices"
          })}
        </script>
      </Helmet>

      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${itservices})` }}
        aria-label="IT Services Banner"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <header className="text-center text-white">
            <h1 className="text-4xl font-bold">IT Services</h1>
            <p className="mt-2">
              "Empowering Your Business with Smart IT Solutions."
            </p>
          </header>
        </div>
      </section>

      {/* Services Section */}
      <main className="container mx-auto py-16 px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our IT Services
        </h2>

        <section className="grid gap-10 lg:grid-cols-1 relative" aria-label="IT Services List">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="relative group flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
            >
              {/* Image */}
              <div className="lg:w-1/3">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full max-h-64 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="lg:w-2/3 p-6 flex flex-col justify-center relative z-10">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>

                {/* Features */}
                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700" aria-label={`${service.title} Features`}>
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ITServicesPage;
