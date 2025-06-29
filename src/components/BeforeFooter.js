import Button from "components/Inputs/Button";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const BeforeFooter = () => {
  return (
    <div className="relative h-[400px]">
      <div className="grid grid-cols-2 h-full">
        <div className="bg-brand_primary text-white px-6 py-16"></div>
        <div className="bg-brand_secondary text-white px-6 py-16"></div>
      </div>
      <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <div className="pr-[4rem]">
          <p className="font-obviously_m text-[22px] leading-[32px] w-[60%] mb-[4rem] text-white">
            Get a closer look at our cutting-edge survey solutions and
            real-world project impact.
          </p>
          <Button
            name={"See What We Do"}
            theme={"secondary"}
            arrowIcon={true}
          />
        </div>
        <div className="pl-[6rem]">
          <p className="font-obviously_m text-[22px] leading-[32px] w-[60%] mb-[4rem] text-brand_primary">
            Ready to experience our services in action? Get in Touch with our
            experts today.
          </p>
          <Button name={"Contact Us"} theme={"white"} arrowIcon={true} />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
