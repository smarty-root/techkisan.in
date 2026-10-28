import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

import automationservices from "../../assets/automationservices.jpg";
import homeautomation from "../../assets/home-automation.jpg";
import lightautomation from "../../assets/light-automation.jpg";
import bms from "../../assets/bms.jpg";
import autodoor from "../../assets/automatic-door.jpg";
import gate from "../../assets/gate-automation.jpg";
import hotel from "../../assets/hotel-lock.jpg";
import occupancy from "../../assets/occupacy-sensor.png";
import hometheatre from "../../assets/home-theatre.jpg";
import nurse from "../../assets/nurse-calling-system.jpg";
import smartlock from "../../assets/Smart-Lock.jpg";

const services = [
  {
    title: "Home Automation",
    id: "homeautomation",
    description:
      "Home automation transforms your living space with smart systems that enhance convenience, security, and energy efficiency.",
    image: homeautomation,
    features: [
      "Smart Controls",
      "Energy Efficiency",
      "Voice Integration",
      "Remote Access",
      "Enhanced Security",
      "Customizable Solutions",
    ],
  },
  {
    title: "Light Automation",
    id: "lightautomation",
    description:
      "Light automation enhances comfort and energy efficiency by providing smart control over your home or office lighting.",
    image: lightautomation,
    features: [
      "Smart Dimming",
      "Motion Sensors",
      "Schedule Programming",
      "Remote Control",
      "Energy Saving Modes",
      "Voice Integration",
    ],
  },
  {
    title: "Building Management System (BMS)",
    id: "bms",
    description:
      "A Building Management System (BMS) optimizes energy use, enhances security, and ensures seamless control of all building operations.",
    image: bms,
    features: [
      "Centralized Monitoring",
      "Energy Optimization",
      "HVAC Control",
      "Lighting Management",
      "Real-Time Alerts",
      "Security Integration",
    ],
  },
  {
    title: "Automatic Door",
    id: "automaticdoor",
    description:
      "Automatic doors offer seamless access, enhanced security, and convenience for homes and businesses.",
    image: autodoor,
    features: [
      "Motion Sensors",
      "Touchless Operation",
      "Enhanced Security",
      "Energy Efficiency",
      "Customizable Designs",
      "Remote Access",
    ],
  },
  {
    title: "Gate Automation",
    id: "gateautomation",
    description:
      "Gate automation combines security, convenience, and modern technology to control access to your property effortlessly.",
    image: gate,
    features: [
      "Remote Operation",
      "Advanced Security",
      "Durable Mechanism",
      "Smart Access Control",
      "Motion Sensors",
      "Customizable Designs",
    ],
  },
  {
    title: "Hotel Lock",
    id: "hotellock",
    description:
      "Hotel lock systems provide secure, efficient, and modern access solutions for guests and staff.",
    image: hotel,
    features: [
      "Keyless Entry",
      "Smart Card Access",
      "Remote Management",
      "Enhanced Security",
      "User-Friendly Interface",
      "Customizable Access Settings",
    ],
  },
  {
    title: "Occupancy Sensor",
    id: "occupancysensor",
    description:
      "Occupancy sensors optimize energy use and enhance convenience by detecting movement to control lighting and other systems automatically.",
    image: occupancy,
    features: [
      "Motion Detection",
      "Energy Efficiency",
      "Automatic Lighting Control",
      "Smart Integration",
      "Adjustable Sensitivity",
      "Wireless Connectivity",
    ],
  },
  {
    title: "Home Theatre",
    id: "hometheatre",
    description:
      "A home theatre system delivers a cinematic experience in the comfort of your home.",
    image: hometheatre,
    features: [
      "Surround Sound",
      "4K/HD Visuals",
      "Smart Device Integration",
      "Customizable Setup",
      "Voice and App Control",
      "Immersive Experience",
    ],
  },
  {
    title: "Nurse Calling System",
    id: "nursecalling",
    description:
      "The Nurse Calling System ensures prompt and efficient communication between patients and medical staff.",
    image: nurse,
    features: [
      "Patient Alert Buttons",
      "Quick Response Alerts",
      "Centralized Monitoring",
      "Wireless Connectivity",
      "Customizable Configurations",
      "Emergency Integration",
    ],
  },
  {
    title: "Smart Lock",
    id: "smartlock",
    description:
      "Smart locks provide keyless entry and enhanced security for homes and businesses.",
    image: smartlock,
    features: [
      "Keyless Entry",
      "Remote Access",
      "Activity Monitoring",
      "Voice Control Integration",
      "Enhanced Security",
      "Easy Installation",
    ],
  },
];

const AutomationServices = () => {
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
      <Helmet>
        <title>Automation Services | Techkisan</title>
        <meta
          name="description"
          content="Explore smart automation services like home automation, BMS, smart locks, occupancy sensors, and more by Techkisan. Simplify life with smart solutions."
        />
        <meta
          name="keywords"
          content="Home Automation, Building Management System, Smart Lock, Nurse Calling, BMS, Gate Automation, Light Automation, Techkisan"
        />
        <link rel="canonical" href="https://www.techkisan.com/automationservices" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Automation Services | Techkisan" />
        <meta
          property="og:description"
          content="Smart automation solutions for home, offices, hospitals, and commercial buildings."
        />
        <meta
          property="og:image"
          content="https://www.techkisan.com/assets/automationservices.jpg"
        />
        <meta property="og:url" content="https://www.techkisan.com/automationservices" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            "name": "Automation Services",
            "url": "https://www.techkisan.com/automation-services",
            "description":
              "A range of smart automation services for home, office, hospitals and commercial spaces by Techkisan.",
            "brand": {
              "@type": "Organization",
              "name": "Techkisan",
              "url": "https://www.techkisan.com"
            }
          })}
        </script>
      </Helmet>

      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${automationservices})` }}
        aria-label="Automation Services Banner"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Automation</h1>
            <p className="mt-2">"Simplifying Life with Smart Solutions"</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Automation Services
        </h2>

        <div className="grid gap-10 lg:grid-cols-1 relative">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="relative group flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10"
            >
              <div className="lg:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full max-h-64 object-cover"
                />
              </div>

              <div className="lg:w-2/3 p-6 flex flex-col justify-center relative z-10">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>

                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AutomationServices;
