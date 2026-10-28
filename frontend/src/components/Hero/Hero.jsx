import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng1 from "../../assets/hero1.webp";
import HeroPng2 from "../../assets/hero2.webp";
import HeroPng3 from "../../assets/hero3.webp";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
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
  };
};

const Hero = () => {
  const images = [HeroPng1, HeroPng2, HeroPng3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="bg-light overflow-hidden relative"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              id="hero-heading"
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-4xl font-bold !leading-snug"
            >
              Smarter & <span className="text-secondary">Safer</span> Spaces!
            </motion.h1>

            <motion.h2
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-xl mt-2 font-medium !leading-relaxed text-gray-600"
            >
              Advanced automation and reliable security solutions for your home
              and business. Trusted by hundreds across India.
            </motion.h2>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                className="primary-btn flex items-center gap-2 group"
                aria-label="Get Started with Techkisan"
              >
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center relative">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            src={images[currentImageIndex]}
            alt={`Smart automation setup and Solar solutions example ${currentImageIndex + 1}`}
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />

          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
            src={Blob}
            alt="Decorative background element"
            aria-hidden="true"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
