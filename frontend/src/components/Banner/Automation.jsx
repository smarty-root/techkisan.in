import React from "react";
import { MdOutlineDoorSliding } from "react-icons/md";
import { motion } from "framer-motion";
import { HiLightBulb } from "react-icons/hi";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaToriiGate, FaUserLock } from "react-icons/fa";
import { GiDoorHandle, GiMovementSensor } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";

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

const Automation = () => {
  const services = [
    { icon: <HiLightBulb className="text-2xl" />, name: "Light Automation",id:"lightautomation",link:"/services/automation#lightautomation"},
    { icon: <BsBuildingFillGear className="text-2xl" />, name: "BMS",id:"bms",link:"/services/automation#bms"},
    { icon: <FaToriiGate className="text-2xl" />, name: "Gate Automation",id:"gateautomation",link:"/services/automation#gateautomation"},
    { icon: <FaUserLock className="text-2xl" />, name: "Hotel Lock",id:"hotellock",link:"/services/automation#hotellock"},
    { icon: <GiMovementSensor className="text-2xl" />, name: "Occupancy Sensor",id:"occupancysensor",link:"/services/automation#occupancysensor"},
    { icon: <BiSolidCameraMovie className="text-2xl" />, name: "Home Theatre",id:"hometheatre",link:"/services/automation#hometheatre"},
    { icon: <GiDoorHandle className="text-2xl" />, name: "Smart Lock",id:"smartlock",link:"/services/automation#smartlock"},
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
          Automation Services
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a href={service.link}>
            <motion.div
              key={index}
              id={service.id}
              variants={FadeUp(0.1 * index)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-[#d6d4d4] rounded-xl hover:bg-[#e0dede] duration-300 hover:shadow-md"
            >
              
              {service.icon}
              <p className="text-lg mt-4 text-center">{service.name}</p>
              
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;
