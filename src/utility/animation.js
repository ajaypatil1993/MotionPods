import { easeInOut } from "framer-motion";

export const SlideRight = (delay) => {
  return {
    hidden: { opacity: 0, x: 100 },

    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },

    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
};
