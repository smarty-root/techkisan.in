import React from "react";
import { motion } from "framer-motion";
import access from "../../assets/access.png"
import cctv from "../../assets/CCTV-Video-Surveillance.png"
import fire from "../../assets/fire-suppression-techkisan.png"
import time from "../../assets/Time-Attendance.png"
import boom from "../../assets/boom-barrier.png"
import firealarm from "../../assets/fire.png"
import network from "../../assets/ipnetwork.png"
import bulgar from "../../assets/Burglar-Alarm-techkisan.png"
import hydrant from "../../assets/Fire-Hydrant-System.png"
import pasys from "../../assets/pa-system.png"
import vehicle from "../../assets/Vehicle-Tracking.png"
import video from "../../assets/video.png"

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

const Security = () => {
  const services = [
    { image: access, name: "Access Control",link:"/services/security#accesscontrol"},
    { image: cctv, name: "CCTV Survillance",link:"/services/security#cctv"},
    { image: fire, name: "Fire Suppression",link:"/services/security#firesuppression"},
    { image: time, name: "Time Attendance",link:"/services/security#timeattendance"},
    { image: boom, name: "Boom Barrier",link:"/services/security#boombarrier"},
    { image: firealarm, name: "Fire Alarm",link:"/services/security#firealarm"},
    { image: network, name: "Network & Communication",link:"/services/security#networkandcommunication"},
    { image: vehicle, name: "Vehicle Tracking",link:"/services/security#vehicletracking"},
    { image: bulgar, name: "Burglar Alarm",link:"/services/security#burglaralarm"},
    { image: hydrant, name: "Fire Hydrant",link:"/services/security#firehydrant"},
    { image: pasys, name: "PA System",link:"/services/security#pasystem"},
    { image: video, name: "Video Door Phone",link:"/services/security#videodoorphone"}
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
          Security Services
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

export default Security;
