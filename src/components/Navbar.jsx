import React from "react";
import { MdMenu } from "react-icons/md";
import { FaApple, FaRegUser } from "react-icons/fa";
import { NavbarData } from "../data/MockData";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="text-white py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, }}
        className="container flex items-center justify-between"
      >
        {/* logo section */}
        <div className="flex items-center gap-2 text-4xl font-semibold">
          <FaApple />
          MotionPods
        </div>

        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6  ">
            {NavbarData.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block  py-2 px-3
                    uppercase text-lg text-white hover:text-gray-500"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>
        {/* Hamburger menu section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
