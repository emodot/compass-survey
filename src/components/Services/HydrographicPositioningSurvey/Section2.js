import Button from "components/Inputs/Button";
import Section2BG from "assets/images/services/hydrographic-sec-2-bg.webp";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = () => {
  return (
    <div className="py-[8rem]">
      <div className="max-w-[1300px] m-auto pb-[6rem]">
        <h1 className="font-redhawk text-[32px] leading-[42px] mb-8">
          Built for depth. <br />
          Designed for precision.
        </h1>
        <div className="flex justify-between items-center">
          <div className="basis-[42%]">
            <img
              className="w-full"
              src={Section2BG}
              alt="hydrographic positioning survey"
            />
          </div>
          <div className="basis-[48%]">
            <p className="font-obviously_r text-[24px] leading-[32px] mb-[2rem]">
              Our hydrographic and positioning surveys provide high-resolution
              depth and spatial data to support marine construction, navigation,
              cable routing, dredging, and offshore energy projects.
            </p>
            <p className="font-obviously_r text-14 leading-[24px]">
              By using uncrewed survey vehicles and real-time GNSS technology,
              we operate in areas traditional vessels can’t reach, while
              improving safety and operational efficiency. Whether in ports or
              open waters, we deliver data that meets international standards
              and is tailored to the unique terrain of African coastlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
