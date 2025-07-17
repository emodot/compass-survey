import TestimonialImage from "assets/images/temp/testimonial-image.webp";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      description:
        "A seasoned geospatial technology expert and the visionary CEO of Compass Survey, a company committed to transforming how terrain-specific challenges across Africa are solved using intelligent, uncrewed survey systems and real-time data platforms.",
      image: TestimonialImage,
    },
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      description:
        "A seasoned geospatial technology expert and the visionary CEO of Compass Survey, a company committed to transforming how terrain-specific challenges across Africa are solved using intelligent, uncrewed survey systems and real-time data platforms.",
      image: TestimonialImage,
    },
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      description:
        "A seasoned geospatial technology expert and the visionary CEO of Compass Survey, a company committed to transforming how terrain-specific challenges across Africa are solved using intelligent, uncrewed survey systems and real-time data platforms.",
      image: TestimonialImage,
    },
  ];
  return (
    <div className="lg:py-[8rem] py-[4rem] bg-[#F9F8F3]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
        <div className="pb-[6rem] lg:grid grid-cols-2">
          <div>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-redhawk lg:text-[36px] text-[24px] lg:leading-[44px] leading-[32px] mb-4 lg:mb-0"
            >
              Our Team
            </motion.h1>
          </div>
          <div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px]"
            >
              Our strength lies in our people—dedicated survey engineers, GIS
              experts, drone pilots, and analysts working together to deliver
              world-class outcomes. We eliminate risk, improve efficiency, and
              deliver real-time, accurate, and actionable data, critical for our
              client’s successful project execution.
            </motion.p>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-6 w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              variants={fadeIn("", 0.2 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="lg:mb-0 mb-[2rem] col-span-1 p-[2rem] h-[500px] flex items-end relative group"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full p-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-[#053333BF] backdrop-blur-sm p-[2rem] flex flex-col justify-center items-center h-full">
                  <p className="text-[#97DBA2] text-[18px] font-obviously_m mb-2">
                    {member.name}
                  </p>
                  <p className="text-[#97DBA2] font-obviously_r text-14 leading-[24px]">
                    {member.title}
                  </p>
                  <hr className="my-6 w-[80%] border-[#F9F8F3]" />
                  <p className="font-obviously_r text-14 leading-[24px] text-center text-white">
                    {member.description}
                  </p>
                </div>
              </div>
              <div className="bg-[#ffffffba] backdrop-blur-sm px-6 py-6 w-full group-hover:opacity-0 transition-opacity duration-300">
                <p className="font-obviously_m text-[17px] leading-[24px] mb-1 text-center">
                  {member.name}
                </p>
                <p className="font-obviously_r text-[14px] leading-[24px] text-center">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
