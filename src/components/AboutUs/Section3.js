import "react-multi-carousel/lib/styles.css";
import Vision from "assets/images/about-sec-3b.webp";
import Mission from "assets/images/about-sec-3a.webp";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section3 = () => {
  return (
    <div>
      <div className="relative h-[450px]">
        <div className="grid grid-cols-2 h-full">
          <div className="bg-[#97DBA2] text-white px-6 py-16"></div>
          <div
            className=""
            style={{
              backgroundImage: `url(${Mission})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
          <div className="pr-[6rem]">
            <div className="h-[50px] w-[50px] bg-brand_primary rounded-full"></div>
            <h1 className="font-redhawk text-[32px] leading-[32px] text-brand_primary my-8">
              Our Mission
            </h1>
            <p className="font-obviously_r text-[14px] leading-[24px] w-[80%] mb-[4rem] text-brand_primary">
              To bridge the gap between global innovation and local execution—by
              designing and delivering intelligent, uncrewed survey systems, and
              real-time data systems, that solve terrain-specific challenges
              across Africa, leveraging on our deep understanding of Africa’s
              unique environments.
            </p>
          </div>
          <div className="pr-[4rem]"></div>
        </div>
      </div>
      <div className="relative h-[450px]">
        <div className="grid grid-cols-2 h-full">
          <div
            className=""
            style={{
              backgroundImage: `url(${Vision})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="bg-brand_primary text-white px-6 py-16"></div>
        </div>
        <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
          <div className="pr-[4rem]"></div>
          <div className="pl-[6rem]">
            <div className="h-[50px] w-[50px] bg-brand_secondary rounded-full"></div>
            <h1 className="font-redhawk text-[32px] leading-[32px] text-brand_secondary my-8">
              Our Vision
            </h1>
            <p className="font-obviously_r text-[14px] leading-[24px] w-[80%] mb-[4rem] text-white">
              To build a future where African innovation powers the world’s most
              advanced survey systems—enabling safer, more efficient, and
              environmentally responsible exploration on land and sea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
