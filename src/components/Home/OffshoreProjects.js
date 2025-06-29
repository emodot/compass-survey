import { useEffect, useState } from "react";
import Section4Img from "assets/images/home-sec-4.jpg";
import Section2BG from "assets/images/home-sec-2-bg.jpg";
import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
// import { ReactComponent as DisabledNext } from "assets/icons/carousel-next-arrow-disabled.svg";
// import { ReactComponent as DisabledPrev } from "assets/icons/carousel-prev-arrow-disabled.svg";
import Button from "components/Inputs/Button";
// import { ArrowLeft, ArrowRight } from "lucide-react";

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
  {
    title: "22 Offshore Pipeline Route Survey for Deepwater Installation",
    description:
      "Our team was contracted to provide comprehensive positioning and hydrographic survey services for a deepwater pipeline installation project in the Gulf of Guinea. The project required high-precision data to support route planning, risk assessment, and construction support.",
    image: Section4Img,
  },
];

export default function OffshoreProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 h-[700px]">
        <div
          className="bg-cover bg-center col-span-2"
          style={{ backgroundImage: `url(${currentProject.image})` }}
        >
        </div>
        <div className="bg-[#003833] flex items-start justify-between col-span-3 p-[6rem]">
          <div className="basis-[70%] text-white flex flex-col justify-center">
            <h3 className="font-obviously_m text-[22px] leading-[32px] mb-[2rem] text-white">
              {currentProject.title}
            </h3>
            <p className="font-obviously_r text-14 leading-[24px] text-white mb-[8rem]">
              {currentProject.description}
            </p>
            <div className="">
              <Button
                name={"View Project"}
                theme={"secondary"}
                arrowIcon={true}
              />
            </div>
          </div>
          <div className="flex gap-3 basis-[30%] justify-end items-start">
            <ActivePrev onClick={handlePrev} />
            <ActiveNext onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
