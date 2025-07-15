import Button from "components/Inputs/Button";
import Section3Image from "assets/images/home-sec-3-ship.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

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
      <div className="max-w-[1300px] w-[95%] m-auto py-[6rem] grid md:grid-cols-5 grid-cols-1 items-center">
        <div className="col-span-1 md:col-span-2">
          <h1 className="font-redhawk md:text-[32px] text-[24px] leading-[40px] text-brand_primary text-center md:text-left">
            Meet the future of <br /> Marine Autonomy
          </h1>
          <div className="mt-[8rem]">
            <p className="font-obviously_r text-16 leading-[24px] mb-2 text-brand_primary text-center md:text-left">
              The Compass Surveyor
            </p>
            <p className="font-redhawk md:text-[45px] text-[32px] leading-[52px] mb-4 text-brand_primary text-center md:text-left">
              Uncrewed Survey Vehicle (USV)
            </p>
            <p className="font-obviously_r md:text-14 text-12 leading-[24px] md:w-[80%] w-full text-center md:text-left">
              The Compass Surveyor USV is designed to handle complex missions
              with ease. Remotely piloted or running autonomously, it integrates
              intelligent software with robust mechanical systems to deliver
              mission reliability at scale.
            </p>
          </div>
          <div className="mt-[8rem] hidden md:block">
            <Button
              name={"Download Specification"}
              theme={"secondary"}
              arrowIcon={true}
            />
          </div>
        </div>
        <div className="col-span-2 my-[4rem] md:my-0">
          <img src={Section3Image} alt="section-3" />
        </div>
        <div className="col-span-1 flex flex-col md:justify-end justify-center items-center md:items-end">
          <div>
            {features.map((item, index) => (
              <div className="mb-[2rem]">
                <p className="font-obviously_r text-[44px] text-brand_primary text-center md:text-left">
                  {item.title}
                </p>
                <p className="font-obviously_r md:text-14 text-12 text-center md:text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[4rem] w-fit m-auto block md:hidden">
        <Button
          name={"Download Specification"}
          theme={"secondary"}
          arrowIcon={true}
        />
      </div>
    </div>
  );
};

export default Section3;
