"use client"
import React from "react"
import { motion } from "framer-motion";

interface FramerAnimationProps {
  children: React.ReactNode;
  [key: string]: any; // Allows any additional props
}

const FramerAnimation: React.FC<FramerAnimationProps> = ({children, ...props}) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FramerAnimation

export const fadeUp = {
  initial: { y: 80, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
};
