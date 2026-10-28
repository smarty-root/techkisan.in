import React from "react";
import homeautomation from "../../assets/home-automation.png";
import solarservice from "../../assets/solar-energy.png";
import securitysol from "../../assets/security.png";
import building from "../../assets/building-automation.png";
import itservice from "../../assets/app-development.png";
import officefactory from "../../assets/sensor.png";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Home Automation",
    link: "/services/automation",
    image: homeautomation,
    alt: "Home Automation Icon",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Solar Services",
    link: "/services/solar",
    image: solarservice,
    alt: "Solar Energy Service Icon",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Security Solutions",
    link: "/services/security",
    image: securitysol,
    alt: "Security Solutions Icon",
    delay: 0.2,
  },
  {
    id: 4,
    title: "Building & Commercial Automation",
    link: "/services/automation",
    image: building,
    alt: "Building Automation Icon",
    delay: 0.2,
  },
  {
    id: 5,
    title: "IT Services",
    link: "/services/it",
    image: itservice,
    alt: "IT Services Icon",
    delay: 0.2,
  },
  {
    id: 6,
    title: "Office & Factory Automation",
    link: "/services/automation",
    image: officefactory,
    alt: "Factory Automation Icon",
    delay: 0.2,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: delay, ease: "easeInOut" },
  },
});

const Services = () => {
  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <div className="container pb-14 pt-5">
        <h2
          id="services-heading"
          className="text-4xl font-bold text-center pb-10"
        >
          Services we provide
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.article
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <a
                href={service.link}
                className="flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
                aria-label={service.title}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-20 w-20 mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold px-3">
                  {service.title}
                </h3>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
