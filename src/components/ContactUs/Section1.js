import Section1BG from "assets/images/contact-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem]">
        <div>
          <h1 className="font-redhawk text-[45px] leading-[52px] w-[60%] mb-6">
            Get in Touch
          </h1>
          <p className="font-obviously_r text-14 leading-[24px] mb-[5rem] w-[70%]">
            With extensive years of experience, we are ready to deliver great
            results for services in  topographical surveys services, offshore
            pre-engineering positioning and site surveys, high resolution marine
            geophysical site surveys, and geotechnical site investigations to
            our clients in Nigeria and the entire African Region.
          </p>
          <img
            src={Section1BG}
            alt="people in a meeting"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
