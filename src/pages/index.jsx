/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Overlay from "./OverlayInside";
import OverlayOutside from "./OverlayOutside";
import { Model } from "./Component/Bmw_m4_f82";

import { Html, useProgress } from '@react-three/drei';
import { SiBmw } from "react-icons/si";
import { motion } from "framer-motion";
import CarColorSelector from "./CarColorSelector";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loading-screen h-screen w-screen flex flex-col items-center bg-white">
      <h1 className=" text-black text-xl mt-56">Loading 3D Model ...</h1>
        <div className="progress-bar   mx-auto w-5/12">
      
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-text">{progress.toFixed(2)}% loaded</div>
      </div>
    </Html>
  );
}


const carColors = [
  { name: "Bright Dusk", colorCode: "#D9AFA3" },
  { name: "Silver Dawn", colorCode: "#C0C0C0" },
  { name: "Denim Blue", colorCode: "#3A5A9E" },
  { name: "Onyx Black", colorCode: "#1C1C1C" },
  { name: "Crystal White", colorCode: "#F0F0F0" },
  { name: "Platinum Grey", colorCode: "#B3B3B3" },
  { name: "Vapour Grey", colorCode: "#8D8D8D" },
];

const Index = () => {
  const [animationName, setAnimationName] = useState("CameraOustide");
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  //const [selectedColor, setSelectedColor] = useState("#333"); // Default color
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedColor, setSelectedColor] = useState(carColors[0].colorCode);
  

  // Reset scroll position when the animationName changes
  useEffect(() => {
    scroll.current = 0;  // Reset scroll position to the top
  }, [animationName]);

  const handleNavClick = (name) => {
    setAnimationName(name);
  };

  return (
    <div className="bg-white text-black h-screen w-screen overflow-y-scroll">
      <div style={{ height: "100vh" }}>
        <div className="fixed z-50 top-0 left-0 right-0 font-semibold  px-5 hover:bg-gradient-to-b from-black/60 to-transparent text-white p-4 flex  justify-between " 
        >
        <SiBmw color="white" size={60} className=" " />

        <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
          <span className=" absolute right-10 text-white text-opacity-75  hover:text-opacity-100 z-50">Menu</span>

{isHovered && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 ,transition:{duration:10} }}
          transition={{ duration: 0.3 }}
          
          className="top-0 pt-10  z-20  right-0  bg-gradient-to-bl from-black/70 to-transparent     gap-3 absolute bg-opacity-50 w-1/5  flex flex-col  align-top justify-center p-4"
        >
          <div
            onClick={() => handleNavClick("CameraInside")}
            className=" text-right text-lg px-8  pt-5 hover:scale-110 transition-all text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
            Interior
          </div>
          <div
            onClick={() => handleNavClick("CameraOustide")}  
               className=" text-right text-lg  px-8  hover:scale-110 transition-all text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
           Exterior
          </div>
          <div
            onClick={() => handleNavClick("CameraSideway")}  
               className=" text-right text-lg  px-8  hover:scale-110 transition-all text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
           Colors
          </div>
        </motion.div>
      )}
        </div>
       
        </div>

        {/* Canvas and Suspense are wrapped here */}
        <Canvas shadows shadowMap eventSource={document.getElementById("root")} eventPrefix="client">
          {/* Suspense wrapped inside Canvas to handle loading state */}
          <Suspense fallback={<Loader />}>
           {/* Ambient light for general illumination */}
           <ambientLight intensity={0.1} color="#ffb100" />

            {/* Directional Light (like sunset) */}
            <directionalLight 
              position={[10, 6, 5]} 
              intensity={3} 
              color="#ff9e00"  // Sunset-like warm color
              castShadow
              shadow-mapSize-width={1024}  // Controls the shadow quality
              shadow-mapSize-height={1024}
              shadow-bias={-0.0001}  // Adjust if shadows appear too harsh or disconnected
        
            />

            {/* Key prop forces re-render on animation change */}
            <Model key={animationName } scroll={scroll} animationName={animationName} color={selectedColor}  />
           
  
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial color="#777" metalness={0.2} roughness={1} />
            </mesh>
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>

        {/* Conditional overlays based on animationName */}
      {/* Conditional overlays based on animationName */}
{animationName === "CameraInside" ? (
  <Overlay ref={overlay} caption={caption} scroll={scroll} key={animationName} />
) : animationName === "CameraOustide" ? (
  <OverlayOutside ref={overlay} caption={caption} scroll={scroll} key={animationName} />
) : (
  <CarColorSelector  carColors={carColors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
)}

      </div>
    </div>
  );
};

export default Index;
