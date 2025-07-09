import Button from "components/Inputs/Button";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";
import OffshoreProjects from "./OffshoreProjects";

const Section4 = () => {  
  return (
    <div>
      <div className="bg-brand_secondary pb-[17rem]">
        <div className="max-w-[1300px] m-auto pt-[5rem] pb-[6rem] grid grid-cols-2">
          <div>
            <p className="text-[22px] font-obviously_m leading-[24px] mb-6 text-brand_primary">
              Our Projects
            </p>
            <h1 className="font-redhawk text-[45px] leading-[52px] text-brand_primary">
              Built on precision. <br />
              Backed by experience.
            </h1>
          </div>
          <div>
            <div className="flex flex-col items-end justify-end h-full">
              <Button name={"Learn More"} theme={"primary"} arrowIcon={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-18rem]">
        <OffshoreProjects />
      </div>
    </div>
  );
};

export default Section4;
