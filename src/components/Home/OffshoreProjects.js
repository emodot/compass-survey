import { useEffect, useState, useRef } from "react";
import Section4Img from "assets/images/home-sec-4.webp";
import Section2BG from "assets/images/home-sec-2-bg.webp";
import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
// import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
// import { ReactComponent as DisabledNext } from "assets/icons/carousel-next-arrow-disabled.svg";
import { ReactComponent as DisabledPrev } from "assets/icons/carousel-prev-arrow-disabled.svg";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Offshore Pipeline Route Survey for Deepwater Installation",
    description:
      "Our team was contracted to provide comprehensive positioning and hydrographic survey services for a deepwater pipeline installation project in the Gulf of Guinea. The project required high-precision data to support route planning, risk assessment, and construction support.",
    image: Section4Img,
  },
  {
    title: "Subsea Cable Laying Support",
    description:
      "We provided survey and positioning services to support the subsea cable laying operations for offshore wind energy infrastructure.",
    image: Section2BG,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

export default function OffshoreProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const navigate = useNavigate();
  const timeoutRef = useRef();

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // auto slide every 5 seconds

    return () => clearInterval(timeoutRef.current);
  }, []);

  const currentProject = projects[currentIndex];

  // For unique AnimatePresence key
  const getKey = (project, idx) => `${project.title}-${idx}`;

  return (
    <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
      <div className="hidden lg:grid grid-cols-5 h-[600px] relative overflow-hidden">
        <div className="col-span-2 relative h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={getKey(currentProject, currentIndex)}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
              style={{ backgroundImage: `url(${currentProject.image})` }}
            />
          </AnimatePresence>
        </div>
        <div className="bg-[#003833] flex items-start justify-between col-span-3 p-[5rem] pb-0 relative overflow-hidden">
          <div className="basis-[70%] text-white flex flex-col justify-center relative w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={getKey(currentProject, currentIndex) + "-content-lg"}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                // exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h3 className="font-obviously_m text-[22px] leading-[32px] mb-[2rem] text-white">
                  {currentProject.title}
                </h3>
                <p className="font-obviously_r text-14 leading-[24px] text-white mb-[6rem]">
                  {currentProject.description}
                </p>
                <div>
                  <Button
                    name={"View Project"}
                    theme={"secondary_plus"}
                    arrowIcon={true}
                    onClick={() => navigate("/projects")}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-3 sm:basis-[30%] basis-[10%] justify-end items-start z-10">
            <DisabledPrev onClick={handlePrev} />
            <ActiveNext onClick={handleNext} />
          </div>
        </div>
      </div>

      <div className="lg:hidden grid grid-rows-5 h-[900px] relative overflow-hidden">
        <div className="row-span-2 relative h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={getKey(currentProject, currentIndex) + "-mobile-img"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
              style={{ backgroundImage: `url(${currentProject.image})` }}
            />
          </AnimatePresence>
        </div>
        <div className="bg-[#003833] row-span-3 lg:col-span-3 lg:p-[6rem] lg:pb-0 p-[2rem] sm:p-[4rem] pb-0 relative overflow-hidden">
          <div className="flex gap-3 justify-end items-start mb-[1rem] z-10">
            <DisabledPrev onClick={handlePrev} />
            <ActiveNext onClick={handleNext} />
          </div>
          <div className="text-white flex flex-col lg:justify-center justify-start relative w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={getKey(currentProject, currentIndex) + "-mobile-content"}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h3 className="font-obviously_m text-[22px] leading-[32px] mb-[2rem] text-white">
                  {currentProject.title}
                </h3>
                <p className="font-obviously_r text-14 leading-[24px] text-white sm:mb-[6rem] mb-[2rem]">
                  {currentProject.description}
                </p>
                <div>
                  <Button
                    name={"View Project"}
                    theme={"secondary_plus"}
                    arrowIcon={true}
                    onClick={() => navigate("/projects")}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
