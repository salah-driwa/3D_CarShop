/* eslint-disable react/prop-types */
import { forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa";

const OverlayOutside = forwardRef(({ caption, scroll }, ref) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for scrolling down, -1 for scrolling up
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  useEffect(() => {
    let scrollInterval;
    if (isScrolling) {
      // Start auto-scrolling when isScrolling is true
      scrollInterval = setInterval(() => {
        if (ref.current) {
          const scrollHeight = ref.current.scrollHeight;
          const scrollTop = ref.current.scrollTop;
          const maxScroll = scrollHeight - window.innerHeight-2;
      
          if (scrollDirection === 1 && scrollTop < maxScroll) {
            // Scroll down
            ref.current.scrollTop = scrollTop + 10; // Adjust scroll speed here
          } else if (scrollDirection === -1 && scrollTop > 0) {
            // Scroll up
            ref.current.scrollTop = scrollTop - 10; // Adjust scroll speed here
          } else {
            // Reverse direction when reaching the top or bottom
            setScrollDirection((prev) => (prev === 1 ? -1 : 1));
            // In case the scroll has reached the bottom, scroll back up by a little bit
         
            if (scrollTop >= maxScroll) {
              ref.current.scrollTop = maxScroll - 2; // Prevent it from overshooting the max scroll
            } else if (scrollTop <= 0) {
              ref.current.scrollTop = 2; // Prevent it from overshooting the top
            }
          }
        }
       // console.log(scrollDirection)
      }, 30); // ~30ms per frame for smoother scrolling
    } else {
      // Clear the interval if auto-scrolling is disabled
      clearInterval(scrollInterval);
    }

    return () => {
      clearInterval(scrollInterval); // Cleanup on component unmount or when scrolling stops
    };
  }, [isScrolling, scrollDirection, ref]);

  return (
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        caption.current.innerText = scroll.current.toFixed(2);
      }}
      className="scroll text-white overflow-y-scroll h-screen"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex items-end justify-end p-5 h-screen"
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
          <div className="relative w-[80%] max-w-lg">
            <h1 className="text-3xl font-semibold text-white">{item.title}</h1>
            <p className="mt-4 text-white text-opacity-70">{item.description}</p>
          </div>
        </motion.div>
      ))}

      <span className="caption" ref={caption}>
        0.00
      </span>

      <div className="SubTitle">
        <div className="mt-16 text-3xl">INTERIOR</div>
      </div>

      {/* Play Button */}
      <button
        className="fixed bottom-10 right-10 p-4 bg-black/50 text-white rounded-full shadow-xl"
        onClick={() => setIsScrolling((prev) => !prev)} // Toggle auto-scroll
      >
        {!isScrolling ? <IoPlay /> : <FaPause />}
      </button>
    </div>
  );
});

OverlayOutside.displayName = "OverlayOutside";

export default OverlayOutside;
