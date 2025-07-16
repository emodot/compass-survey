import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";
import OffshoreProjects from "./OffshoreProjects";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-brand_secondary pb-[17rem]">
        <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[6rem] grid lg:grid-cols-2 grid-cols-1">
          <div>
            <p className="lg:text-[22px] text-[16px] font-obviously_m leading-[24px] mb-6 text-brand_primary">
              Our Projects
            </p>
            <h1 className="font-redhawk text-[45px] leading-[52px] text-brand_primary">
              Built on precision. <br />
              Backed by experience.
            </h1>
          </div>
          <div className="lg:block hidden">
            <div className="flex flex-col items-end justify-end h-full">
              <Button
                name={"Learn More"}
                theme={"primary"}
                arrowIcon={true}
                onClick={() => navigate("/projects")}
              />
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
