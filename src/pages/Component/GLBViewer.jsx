/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GLBViewer = ({ modelPath, onLoaded }) => {
  const modelRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath, 
      (gltf) => {
        modelRef.current = gltf.scene;
        if (onLoaded) onLoaded();  // Trigger onLoaded once the model is loaded
      },
      undefined, 
      (error) => {
        console.error("Error loading GLB model:", error);
      }
    );
  }, [modelPath, onLoaded]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {/* Render the model or placeholder while loading */}
      {modelRef.current && (
        <primitive object={modelRef.current} />
      )}
    </div>
  );
};

export default GLBViewer;
