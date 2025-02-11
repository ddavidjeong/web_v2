import React from "react";
import { motion } from "framer-motion";

export default function FillerBody() {
  return (
    <div className="px-14 space-y-8">

      {Array.from({ length: 20 }).map((_, index) => (
        <motion.p
          key={index}
          className="text-lg font-serif text-base-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer nec odio. Praesent libero. Sed
          cursus ante dapibus diam. Sed nisi. Nulla quis sem
          at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris. Fusce nec tellus sed augue semper
          porta. Mauris massa. Vestibulum lacinia arcu eget
          nulla.
        </motion.p>
      ))}
    </div>
  );
}
