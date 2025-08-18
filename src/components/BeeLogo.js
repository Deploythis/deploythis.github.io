import React from "react"
import { motion } from "framer-motion"
import logoImage from "../images/logo.png"

const BeeLogo = ({ size = 64, className = "" }) => {
  const hoverAnimation = {
    hover: {
      scale: 1.1,
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    initial: {
      scale: 1,
      rotate: 0
    }
  }

  return (
    <motion.div
      className={`bee-logo ${className}`}
      style={{ 
        width: size, 
        height: size, 
        display: "inline-block",
        verticalAlign: "middle"
      }}
      variants={hoverAnimation}
      initial="initial"
      whileHover="hover"
    >
      <img
        src={logoImage}
        alt="Deploy/this Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      />
    </motion.div>
  )
}

export default BeeLogo