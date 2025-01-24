import React from "react";
import { motion } from "framer-motion";

interface TextSlideInProps {
  words: string[];
}

const TextSlideIn: React.FC<TextSlideInProps> = ({
  words,
}) => {
  const containerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { ease: "easeInOut", duration:0.75
        // Delay between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      {words.map((word, index) => (
        <motion.div
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            overflow: "hidden",
          }} // Ensures letters animate in from the invisible wall
        >
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ display: "inline-block" }} // Allows individual animation of letters
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TextSlideIn;
