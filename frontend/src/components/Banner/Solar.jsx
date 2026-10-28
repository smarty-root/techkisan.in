import React from "react";
import { motion } from "framer-motion";
import OnGrid from "../../assets/on-grid.png"
import OffGrid from "../../assets/off-grid.png"
import inverter from "../../assets/inverter.png"
import battery from "../../assets/battery.png"

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

const Solar = () => {
  const services = [
    { image: OnGrid, name: "On Grid",id:"ongrid",link:"/services/solar#ongrid"},
    { image: OffGrid, name: "Off Grid",id:"offgrid",link:"/services/solar#offgrid"},
    { image: inverter, name: "Inverter",id:"inverter",link:"/services/solar#inverter"},
    { image: battery, name: "Battery",id:"battery",link:"/services/solar#battery"}
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
          Solar Services
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

export default Solar;
