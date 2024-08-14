import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { HeadphoneData } from "../data/MockData";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeadphoneData.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveData(HeadphoneData[currentIndex]);
  }, [currentIndex]);

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <motion.section
      initial={{
        backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`,
      }}
      animate={{
        backgroundImage: `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor} 70%)`,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }} // smoother background transition
      className="bg-red-400 text-white"
    >
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">
        {/* Headphone Info Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 md:space-y-7 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeData.id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }} // smoother text transition
                className="text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {activeData.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // delay for smoother sequence
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }} // consistent delay
                className="text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {activeData.price}
              </motion.p>
            </AnimatePresence>

            {/* Social Icons Section */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-4xl">
              <FaInstagram className="cursor-pointer border rounded-full p-[6px]" />
              <FaFacebook className="cursor-pointer border rounded-full p-[6px]" />
              <FaTwitter className="cursor-pointer border rounded-full p-[6px]" />
            </div>
          </div>
        </div>

        {/* Headphone Image Section */}
        <div className="flex flex-col items-center justify-center order-1 md:order-2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.95 }} // scaling for smoother entrance
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }} // smoother scaling transition
              exit={{ opacity: 0, scale: 0.95 }}
              src={activeData.Image}
              alt={activeData.title}
              className="w-[300px] md:w-[400px] xl:w-[500px] relative z-10"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // consistent timing
              exit={{ opacity: 0 }}
              className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2 z-0 text-white/5 font-poppins font-extrabold"
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Chat Icon Section */}
        <div className="absolute bottom-10 right-10 z-[999]">
          <FaMessage className="cursor-pointer text-2xl" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
