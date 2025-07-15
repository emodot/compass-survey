import Section1BG from "assets/images/services-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem]">
        <div>
          <h1 className="font-redhawk text-[45px] leading-[52px] w-[60%] mb-6">
            What we do
          </h1>
          <p className="font-obviously_r text-14 leading-[24px] mb-[5rem] w-[70%]">
            With deep roots in the oil and gas sector and a vision to transform
            the industry through technology and local talent, we blend deep
            technical know-how with localized insight to solve our clients’ most
            pressing challenges—especially in shallow water environments.
          </p>
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
