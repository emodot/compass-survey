import TestimonialImage from "assets/images/temp/testimonial-image.webp";
// import Button from "components/Inputs/Button";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      image: TestimonialImage,
    },
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      image: TestimonialImage,
    },
    {
      name: "James Okoli",
      title: "Chief Executive Officer",
      image: TestimonialImage,
    },
  ];
  return (
    <div className="py-[8rem] bg-[#F9F8F3]">
      <div className="max-w-[1300px] m-auto">
        <div className="pb-[6rem] grid grid-cols-2">
          <div>
            <h1 className="font-redhawk text-[36px] leading-[44px]">
              Our Team
            </h1>
          </div>
          <div>
            <p className="font-obviously_r text-14 leading-[24px]">
              Our strength lies in our people—dedicated survey engineers, GIS
              experts, drone pilots, and analysts working together to deliver
              world-class outcomes. We eliminate risk, improve efficiency, and
              deliver real-time, accurate, and actionable data, critical for our
              client’s successful project execution.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-span-1 p-[2rem] h-[500px] flex items-end"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-[#ffffffdb] px-6 py-6 w-full">
                <p className="font-obviously_m text-[17px] leading-[24px] mb-1 text-center">
                  {member.name}
                </p>
                <p className="font-obviously_r text-[14px] leading-[24px] text-center">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
