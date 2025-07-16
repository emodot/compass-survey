import Section1BG from "assets/images/contact-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] w-[95%] m-auto lg:pt-[13rem] pt-[10rem] pb-[4rem]">
        <div>
          <h1 className="font-redhawk lg:text-[45px] text-[32px] leading-[52px] lg:w-[60%] w-full mb-6">
            Get in Touch
          </h1>
          <p className="font-obviously_r lg:text-14 text-[12px] leading-[24px] lg:w-[70%] w-full">
            With extensive years of experience, we are ready to deliver great
            results for services in  topographical surveys services, offshore
            pre-engineering positioning and site surveys, high resolution marine
            geophysical site surveys, and geotechnical site investigations to
            our clients in Nigeria and the entire African Region.
          </p>
          {/* <img src={Section1BG} alt="people in a meeting" className="" /> */}
        </div>
      </div>
      <div
        className="lg:h-[25rem] h-[15rem]"
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
