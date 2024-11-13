/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const CarColorSelector = ({ carColors ,setSelectedColor,selectedColor  }) => {

  return (
    <div className="scroll mt-auto flex h-screen relative">
      {/* Car Display */}
      <motion.div
       
        className="flex items-center bg-gradient-to-l from-black/40 to-transparent h-screen absolute justify-center bg-cover bg-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Optional: Add an overlay with 'Color' label */}
        <div className="absolute bottom-20 left-20 text-white text-8xl">COLORS</div>
      </motion.div>

      {/* Color Options */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end space-y-2 font-semibold   text-white text-4xl">
        {carColors.map((color) => (
          <div
            key={color.name}
     
          onClick={() => setSelectedColor(color.colorCode)}
            className={`cursor-pointer hover:text-white/80 ${
              selectedColor.name === color.name ? "text-white/50" : "text-white/60"
            }`}
          >
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarColorSelector;
