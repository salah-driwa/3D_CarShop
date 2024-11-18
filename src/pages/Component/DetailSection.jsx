import { motion } from "framer-motion";
import Specifications from "./Specifications";
import WeightAndDimensions from "./WeightAndDimensions";
import Accessories from "./Accessories";
import FAQ from "./FAQ";
import OtherModels from "./OtherModels";
import Footer from "./Footer";
import OtherModels1 from "./OtherModels1";

function DetailSection() {
  const sections = [
    { id: 1, title: "Specifications", component: <Specifications /> },
    { id: 2, title: "Weight and Dimensions", component: <WeightAndDimensions /> },
    { id: 3, title: "Accessories", component: <Accessories /> },
    { id: 4, title: "FAQ", component: <FAQ /> },
    { id: 5, title: "Other Models", component: <OtherModels /> },
    {  id: 6, title: "Other Models",component: <OtherModels1/>},
    { id: 7, title: "Footer", component: <Footer /> },
  ];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center text-white"
    >
      <div className="h-[85vh] w-11/12 mx-auto bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl snap-y snap-mandatory overflow-y-scroll">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="snap-center flex items-center  justify-center pt-8  h-[82vh] "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full   ">
            
            {section.component}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DetailSection;
