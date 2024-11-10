/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Overlay from "./OverlayInside";
import OverlayOutside from "./OverlayOutside";
import { Model } from "./Component/Bmw_m4_f82";

import { Html, useProgress } from '@react-three/drei';

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

const Index = () => {
  const [animationName, setAnimationName] = useState("CameraInside");
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

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
        <div className="fixed z-50 top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-around">
          <button onClick={() => handleNavClick("CameraInside")}>Camera Inside</button>
          <button onClick={() => handleNavClick("CameraOustide")}>Camera Outside</button>
        </div>

        {/* Canvas and Suspense are wrapped here */}
        <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
          {/* Suspense wrapped inside Canvas to handle loading state */}
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[10, 6, 5]}
              intensity={5}
              castShadow
              shadow-mapSize-width={2024}
              shadow-mapSize-height={2024}
            />

            {/* Key prop forces re-render on animation change */}
            <Model key={animationName} scroll={scroll} animationName={animationName} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial color="#777" metalness={0.2} roughness={1} />
            </mesh>
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>

        {/* Conditional overlays based on animationName */}
        {animationName === "CameraInside" ? (
          <Overlay ref={overlay} caption={caption} scroll={scroll} key={animationName} />
        ) : (
          <OverlayOutside ref={overlay} caption={caption} scroll={scroll} key={animationName} />
        )}
      </div>
    </div>
  );
};

export default Index;
