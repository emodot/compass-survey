import Blog1 from "assets/images/temp/blog-1.webp";
import Blog2 from "assets/images/temp/blog-2.webp";
import Blog3 from "assets/images/temp/blog-3.webp";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const NewsBlog = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      date: "29 May 2025",
      title: "Enhancing Marine Navigation with Advanced Hydrographic Surveying",
      tag: "main",
      image: Blog1,
    },
    {
      date: "29 May 2025",
      title:
        "Supporting Coastal Infrastructure Projects with Precision Surveying",
      image: Blog2,
    },
    {
      date: "29 May 2025",
      title:
        "Mitigating Risks in Subsea Cable Laying Through Pre-Route Surveys",
      image: Blog3,
    },
  ];
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[8rem] pb-[6rem]">
        <div>
          <motion.h1
            className="font-obviously_m text-[24px] leading-[32px] mb-[2rem]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            News / Blog
          </motion.h1>
        </div>
        <div className="grid lg:grid-flow-col grid-rows-2 gap-4 mb-[4rem]">
          <motion.div
            className="row-span-2 lg:grid grid-cols-2 gap-4 bg-[#EDEEEE]"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div
              style={{ backgroundImage: `url(${blogs[0].image})` }}
              className="bg-cover bg-center h-[400px] lg:h-auto"
            ></div>
            <div className="px-[2rem] py-[4rem] pb-[2rem] flex flex-col justify-between">
              <p className="text-[12px] leading-[16px] mb-[1rem]">
                {blogs[0].date}
              </p>
              <h3 className="font-obviously_r text-[16px] leading-[24px] lg:mb-[5rem] mb-[2rem]">
                {blogs[0].title}
              </h3>
              <Button
                name={"Read More"}
                theme={"full_transparent"}
                arrowIcon={true}
                onClick={() => navigate("/blog")}
              />
            </div>
          </motion.div>
          {blogs
            .filter((blog) => blog.tag !== "main")
            .map((blog, index) => (
              <motion.div
                key={index}
                className="col-span-1 grid grid-cols-7 lg:gap-4 gap-2 bg-[#EDEEEE] p-[10px]"
                variants={fadeIn("up", 0.8 + index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div
                  style={{ backgroundImage: `url(${blog.image})` }}
                  className="bg-cover bg-center h-[150px] lg:col-span-2 col-span-3"
                ></div>
                <div className="p-[10px] pb-0 lg:col-span-5 col-span-4">
                  <p className="text-[12px] leading-[16px] mb-[10px]">
                    {blog.date}
                  </p>
                  <h3 className="font-obviously_r lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20px] mb-[1rem]">
                    {blog.title}
                  </h3>
                  <Button
                    name={"Read More"}
                    theme={"full_transparent"}
                    arrowIcon={true}
                    onClick={() => navigate("/blog")}
                  />
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button
            name={"See All News"}
            theme={"transparent"}
            arrowIcon={true}
            onClick={() => navigate("/blog")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NewsBlog;
