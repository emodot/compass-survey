// import { TypeAnimation } from "react-type-animation";
import Section1BG from "assets/images/home-sec-1-bg.png";
import Button from "components/Inputs/Button";
import Section3Image from "assets/images/home-sec-3-ship.jpg";
// import Section1BGMobile from "assets/images/home-sec-1-bg-mobile.webp";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section3 = () => {
  const features = [
    {
      title: "500kg",
      text: "Payload Capacity",
    },
    {
      title: "6kn",
      text: "Maximum Speed",
    },
    {
      title: "4kn",
      text: "Survey Speed",
    },
  ];
  return (
    <div className="bg-[#EEF9F0]">
      <div className="max-w-[1300px] m-auto py-[6rem] grid grid-cols-5">
        <div className="col-span-2">
          <h1 className="font-redhawk text-[32px] leading-[40px]">
            Meet the future of <br /> Marine Autonomy
          </h1>
          <div className="mt-[8rem]">
            <p className="font-obviously_r text-14 leading-[24px] mb-2 text-brand_primary">
              The Compass Surveyor
            </p>
            <p className="font-redhawk text-[45px] leading-[52px] mb-4 text-brand_primary">
              Uncrewed Survey Vehicle (USV)
            </p>
            <p className="font-obviously_r text-14 leading-[24px] w-[80%]">
              The Compass Surveyor USV is designed to handle complex missions
              with ease. Remotely piloted or running autonomously, it integrates
              intelligent software with robust mechanical systems to deliver
              mission reliability at scale.
            </p>
          </div>
          <div className="mt-[8rem]">
            <Button
              name={"Download Specification"}
              theme={"secondary"}
              arrowIcon={true}
            />
          </div>
        </div>
        <div className="col-span-2">
          <img src={Section3Image} alt="section-3" />
        </div>
        <div className="col-span-1 flex flex-col justify-end items-end">
          <div>
            {features.map((item, index) => (
              <div className="mb-[2rem]">
                <p className="font-obviously_r text-[44px] text-brand_primary">
                  {item.title}
                </p>
                <p className="font-obviously_r text-14">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
