/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { motion } from "framer-motion";

const OverlayOutside = forwardRef(({ caption, scroll }, ref) => {
  const items = [
    {
      id: 1,
      title: "Tailored steering wheel",
      description:
        "This leather-free three-spoke steering wheel is hand stitched and wrapped in a synthetic material with a luxurious touch. Stylish satin silk trim and colour-coordinated stitching add to the finely crafted feel. For extra comfort in cold weather, the steering wheel is available with electrical heating.",
    },
    {
      id: 2,
      title: "Checkered aluminum decor",
      description:
        "This stylish aluminium decor enhances the elegant and dynamic character of your Volvo by adding a technical, modern touch to the car's interior.",
    },
    {
      id: 3,
      title: "Leather in charcoal interior",
      description:
        "Smooth Charcoal Leather upholstery in a colour-coordinated Charcoal interior with crafted decor in genuine materials for a distinctive, timeless expression of style.",
    },
    {
      id: 4,
      title: "Relax in comfort",
      description:
        "Sink back into your seat and savour the fine Nappa leather of the S90 Recharge. Soft to the touch, you and your passengers enjoy relaxed comfort on every journey.",
    },
  ];

  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        caption.current.innerText = scroll.current.toFixed(2);
      }}
      className="scroll text-white snap-y snap-mandatory  overflow-y-scroll h-screen"
    >
      {items.map((item, index) => (
    <motion.div
    key={item.id}
    className="snap-center flex items-end justify-end p-5 h-screen" // Replaced m-5 with p-5
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    }}
    style={{
      zIndex: items.length - index,
      opacity: 1 - index * 0.2, // Fades out as cards are stacked
    }}
  >
    <div className="relative w-[80%] max-w-lg bg-black bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-semibold text-white">{item.title}</h1>
      <p className="mt-4 text-white text-opacity-70">{item.description}</p>
    </div>
  </motion.div>
  
      ))}

      <span className="caption" ref={caption}>
        0.00
      </span>
 
      <div className="SubTitle">
        <span>INDULGE</span>
        <span>YOUR</span>
        <span>SENSES</span>
        <div className="  mt-16 text-3xl">
        Exterior
      </div>
      </div>
     

    </div>
  );
});
OverlayOutside.displayName = "OverlayOutside";

export default OverlayOutside;
