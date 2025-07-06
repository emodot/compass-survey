import Button from "components/Inputs/Button";
import Section4BG from "assets/images/services/hydrographic-sec-2-bg.webp";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section4 = () => {
  const steps = [
    {
      num: "01",
      title: "Project Consultation & Scope Definition",
      text: "We engage clients to understand survey objectives, operational constraints, and desired outcomes. This helps define the right tools, approach, and timelines for optimal execution.",
    },
    {
      num: "02",
      title: "USV Deployment & Data Acquisition",
      text: "We mobilize uncrewed survey vehicles equipped with sonar and GNSS systems to collect precise hydrographic and positioning data—even in shallow or high-risk zones.",
    },
    {
      num: "03",
      title: "Real-Time Monitoring & Adjustments",
      text: "Our team continuously monitors the data feed, adjusting survey routes and parameters in real-time for full coverage and minimal downtime.",
    },
    {
      num: "04",
      title: "Data Processing & Reporting",
      text: "Post-survey, we process and quality-check all data, delivering bathymetric charts, position logs, and reports in client-ready formats.",
    },
  ];

  return (
    <div className="pt-[8rem] bg-[#F0F0F0]">
      <div className="max-w-[1300px] m-auto pb-[6rem] flex justify-between">
        <div className="basis-[42%]">
          <h1 className="font-redhawk text-[32px] leading-[42px] mb-8 text-[#192F36]">
            Our Process
          </h1>
        </div>
        <div className="basis-[52%]">
          <div className="">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-[2rem] mb-[4rem]">
                <div className="w-[50px] h-[50px] bg-brand_secondary rounded-[10px] flex items-center justify-center">
                  <h1 className="font-obviously_m text-[18px] leading-[28px] text-[#053333]">
                    {item.num}
                  </h1>
                </div>
                <div className="flex flex-col gap-[1rem] w-[80%] mt-1">
                  <h1 className="font-obviously_r text-[20px] leading-[20px] text-[#192F36]">
                    {item.title}
                  </h1>
                  <p className="font-obviously_r text-[14px] leading-[24px] text-[#192F36]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
