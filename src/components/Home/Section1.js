import Section1BG from "assets/images/home-sec-1-bg.webp";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="max-w-[1300px] w-[95%] m-auto pt-[13rem] pb-[6rem] grid lg:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="font-redhawk text-[45px] lg:text-[50px] leading-[64px]">
            Innovating Survey Solutions for Africa
          </h1>
        </div>
        <div className="lg:pl-[4rem]">
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
              onClick={() => navigate("/about-us")}
            />
            <Button
              name={"Get in Touch"}
              theme={"secondary"}
              arrowIcon={true}
              onClick={() => navigate("/contact-us")}
            />
          </div>
        </div>
      </div>
      <div
        className="h-[35rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section1BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Section1;
