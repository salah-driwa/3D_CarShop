/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion';
import { useRef } from 'react';
//import React from 'react';
import  { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Model from './home';


const About = () => {

  const scroll = useRef(0)
  return (
    <>
      <Canvas shadows eventSource={document.getElementById("root")}  className=' h-screen'>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
        </Suspense>
      </Canvas>

    </>
  )
}
export default About;
