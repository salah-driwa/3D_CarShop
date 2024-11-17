/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {  Environment, useGLTF } from "@react-three/drei";
import Overlay from "./OverlayInside";
import OverlayOutside from "./OverlayOutside";
import { Model } from "./Component/Bmw_m4_f82";

import { Html, useProgress } from '@react-three/drei';
import { SiBmw } from "react-icons/si";
import { motion } from "framer-motion";
import CarColorSelector from "./CarColorSelector";
import second from '../assets/3d assets/gear.glb'
import DetailSection from "./Component/DetailSection";
import logo from '../assets/bmw-logo.svg'



function Loader() {
  const { progress } = useProgress();
  const [dots, setDots] = useState('');

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 100); // Change dots every 500ms
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <Html center>
      <div className="loading-screen h-screen w-screen flex flex-col items-center bg-white">
        {/* Animated Dots */}
        <h1 className="text-black text-xl mt-56">
          Loading 3D Models{dots}
        </h1>

        {/* Rotating Logo */}
        <div
          className={`loader mx-auto w-28 h-28 mt-10`}
          style={{
            animation: progress < 100 ? 'spin 1s linear infinite' : 'none',
          }}
        >
          <img src={logo} alt="Loading Logo" className="w-full h-full" />
        </div>

        {/* Progress Bar */}
        <div className="progress-bar w-2/3 mt-4 h-2 bg-gray-200 rounded-full">
          <div
            className="progress h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Rotating Animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Html>
  );
}
function BackgroundModel() {
  // Load your GLB model here
  const { scene } = useGLTF(second); // Replace with your GLB file path

  
  return (
    <primitive
      object={scene}
      position={[-3,-3,12]} // Position it far enough to act as the background
      scale={[0.09, 0.09, 0.09]} // Scale the model to fit as the background
      rotation={[0.2, 0, 0]} // Optional: adjust the rotation of the model if needed
    />
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
  const [Detail, setDetail] = useState(false);
  
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
    if(name != "ShowDetails"){
    setAnimationName(name);
    console.log(name)
    setDetail(false)
  } 
  else
  { 
    setDetail(true)
    setAnimationName("CameraOustide");
    console.log(name)

  } 
}

  return (
    <div className="bg-white text-black  h-screen w-screen ">
      <div style={{ height: "100vh" }} className=" relative">
        <div className="fixed z-50 top-0 left-0 right-0 font-semibold  px-5 bg-gradient-to-b from-black/60 to-transparent text-white p-4 flex  justify-between " 
        >
        <SiBmw color="white" size={60} className=" " />

        <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
          <span className=" absolute right-10 text-white text-opacity-100 text-3xl  hover:text-opacity-100 z-50">Menu</span>

{isHovered && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 ,transition:{duration:10} }}
          transition={{ duration: 0.3 }}
          
          className="top-0 pt-10  z-20  right-0  bg-gradient-to-l from-black to-gra/5     gap-3 absolute bg-opacity-50 w-1/5  flex flex-col  align-top justify-center p-4"
        >
          <div
            onClick={() => handleNavClick("CameraInside")}
            className=" text-right  px-8  pt-20 hover:scale-110 transition-all text-2xl  text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
            Interior
          </div>
          <div
            onClick={() => handleNavClick("CameraOustide")}  
               className=" text-right   px-8  hover:scale-110 transition-all text-2xl text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
           Exterior
          </div>
          <div
            onClick={() => handleNavClick("CameraSideway")}  
               className=" text-right text-2xl  px-8  hover:scale-110 transition-all text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
           Colors
          </div>
          <div
            onClick={() => handleNavClick("ShowDetails")}  
               className=" text-right text-2xl  px-8  hover:scale-110 transition-all text-white text-opacity-75 hover:text-opacity-100 rounded"
          >
           ShowDetails
          </div>
        </motion.div>
      )}
        </div>
        
        </div>

        {/* Canvas and Suspense are wrapped here */}
        <Canvas shadows shadowMap eventSource={document.getElementById("root")} eventPrefix="client">
          {/* Suspense wrapped inside Canvas to handle loading state */}
          <Suspense fallback={<Loader />} >
         
           <ambientLight intensity={0.1} color="#ffb100" />

           
            <directionalLight 
              position={[10, 6, 5]} 
              intensity={3} 
              color="#ff9e00"  // Sunset-like warm color
              castShadow
              shadow-mapSize-width={1024}  // Controls the shadow quality
              shadow-mapSize-height={1024}
              shadow-bias={-0.0001}  // Adjust if shadows appear too harsh or disconnected
        
            />
           <BackgroundModel/>
           <Model key={animationName } scroll={scroll} animationName={animationName} color={selectedColor}  />
   
            <Environment preset="sunset" background />
          
        

        
          </Suspense>
   
        </Canvas>

{/* Conditional overlays based on animationName */}
{Detail ? (
  <DetailSection />
) : animationName === "CameraInside" ? (
  <Overlay ref={overlay} caption={caption} scroll={scroll} key={animationName} />
) : animationName === "CameraOustide" ? (
  <OverlayOutside ref={overlay} caption={caption} scroll={scroll} key={animationName} />
) : (
  <CarColorSelector
    carColors={carColors}
    selectedColor={selectedColor}
    setSelectedColor={setSelectedColor}
  />
)}

      </div>
    </div>
  );
};

export default Index;
