import Section1BG from "assets/images/home-sec-1-bg.webp";
import Button from "components/Inputs/Button";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem] grid grid-cols-2">
        <div>
          <h1 className="font-redhawk text-[50px] leading-[64px]">
            Innovating Survey Solutions for Africa
          </h1>
        </div>
        <div className="pl-[4rem]">
          <p className="font-obviously_r text-14 leading-[24px] mb-6">
            We are your innovative, tech-native partner that delivers custom
            solutions using uncrewed survey vehicles and local engineering
            insight.
          </p>
          <div className="flex gap-4">
            <Button
              name={"Discover More"}
              theme={"transparent"}
              arrowIcon={true}
            />
            <Button
              name={"Get in Touch"}
              theme={"secondary"}
              arrowIcon={true}
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src={Section1BG}
          alt="cars on highway"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Section1;
