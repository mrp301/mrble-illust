import React, { VFC, ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

type Props = {
  children: ReactNode;
};

export const FadeIn: VFC<Props> = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="visible"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
