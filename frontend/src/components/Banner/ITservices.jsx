import React from "react";
import { motion } from "framer-motion";
import webdesign from "../../assets/web-design.png"
import software from "../../assets/coding.png"
import website from "../../assets/website.png"
import cyber from "../../assets/cyber-security.png"
import consult from "../../assets/it-consultant.png"
import data from "../../assets/data-management.png"
import cloud from "../../assets/cloud-computing.png"
import ai from "../../assets/ai-solutions.png"
import { a } from "framer-motion/client";

export const FadeUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const ITservices = () => {
  const services = [
    { image: webdesign, name: "Web Design",id:"webdesign",link:"/services/it#webdesign"},
    { image: software, name: "Software Development",id:"softwaredevelopment",link:"/services/it#softwaredevelopment"},
    { image: website, name: "Website Development",id:"webdevelopment",link:"/services/it#webdevelopment"},
    { image: cyber, name: "Cybersecurity Solutions",id:"cybersecurity",link:"/services/it#cybersecurity"},
    { image: consult, name: "IT Consulting and Strategy",id:"itconsulting",link:"/services/it#itconsulting"},
    { image: ai, name: "AI Solutions",id:"ai",link:"/services/it#ai"},
    { image: data, name: "Data Management",id:"datamanagement",link:"/services/it#datamanagement"},
    { image: cloud, name: "Cloud Computing",id:"cloudcomputing",link:"/services/it#cloudcomputing"}
  ]; 

  return (
    <section className="py-14 md:py-15 bg-light flex justify-center">
      <div className="container bg-white shadow-lg shadow-gray-500/50 rounded-2xl p-8 max-w-7xl">
    
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          IT Services & Solutions
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a href={service.link}>
            <motion.div
              key={index}
              variants={FadeUp(0.1 * index)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-[#d6d4d4] rounded-xl hover:bg-[#e0dede] duration-300 hover:shadow-md"
            >
               <img
                src={service.image}
                alt={service.name}
                className="w-8 h-8" 
              />
              <p className="text-lg mt-4 text-center">{service.name}</p>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITservices;
