// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";
import Section2BG from "assets/images/about-sec-2-bg.webp";
import { useState } from "react";

const Section2 = () => {
  const [moreText, setMoreText] = useState(false);

  return (
    <div>
      <div className="lg:py-[8rem] py-[4rem]">
        <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:grid grid-cols-7 gap-6">
          <div className="col-span-2">
            <h1 className="font-obviously_m lg:text-[22px] text-[20px] lg:leading-[34px] leading-[30px] text-brand_primary mb-4 lg:mb-0">
              About Compass <br /> Survey Limited
            </h1>
          </div>
          <div className="col-span-5">
            <p className="font-obviously_r lg:text-[28px] text-[18px] lg:leading-[38px] leading-[28px] mb-6 text-brand_primary">
              Compass Survey Limited leads the way in delivering
              precision-driven, locally developed, and tech-enabled survey
              solutions across Africa. We specialize in combining advanced
              uncrewed technologies with indigenous innovation to tackle complex
              offshore and onshore challenges. Our dedicated team is committed
              to transforming how land, marine, and infrastructure surveys are
              conducted—bringing accuracy, efficiency, and reliability to every
              project.
            </p>
            <p className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px] text-brand_primary">
              Compass Survey Limited delivers precision-driven, locally
              developed, and tech-enabled survey solutions—combining the power
              of uncrewed technology with indigenous innovation to solve complex
              offshore and onshore challenges. We eliminate risk, improve
              efficiency, and deliver real-time, accurate, and actionable data,
              critical for our client’s successful project execution.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:py-[8rem] py-[4rem] bg-[#F9F8F3]">
        <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:grid grid-cols-5 gap-[5rem]">
          <div className="col-span-2">
            <h1 className="font-obviously_m lg:text-[22px] text-[16px] lg:leading-[34px] leading-[28px] text-brand_primary lg:mb-6 mb-4">
              Our Story
            </h1>
            <h2 className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[40px] leading-[32px] text-brand_primary lg:mb-[3rem] mb-[2rem]">
              Charting New Paths. <br /> Solving Real Problems.
            </h2>
            <img
              src={Section2BG}
              alt="ships on the sea"
              className="hidden md:block"
            />
          </div>
          <div className="col-span-3  lg:h-[600px] overflow-y-auto">
            <p className="font-obviously_r text-14 leading-[24px] text-brand_primary">
              In the heart of Nigeria’s oil and gas frontier—where rugged
              terrain meets unforgiving waters and where innovation often feels
              like a foreign luxury— Compass Survey Limited was born out of a
              single, unwavering belief: Clients don’t need more vendors. They
              need partners who can solve problems. <br /> <br />
              For decades, the survey industry has relied on traditional
              vessels, repetitive methods, and imported solutions that often
              fell short in the unique complexity of Nigerian terrains. But we
              saw what others overlooked: a gap—not just in technology, but in
              tailored, client-driven innovation. <br /> <br />
            </p>
            <p className="lg:block hidden font-obviously_r text-14 leading-[24px] text-brand_primary">
              So, we made a choice. <br />
              Instead of trying to win price wars or replicate global templates,
              we focused on what matters most: engineering home-grown,
              cutting-edge solutions that actually work here. We set out to
              remove risk, and increase precision—especially in the one place
              everyone else avoids: shallow waters. <br /> <br />
              At Compass Survey, we lead with technology, but we build with
              understanding. Our Uncrewed Survey Vehicles (USVs) aren’t just
              tools—they’re game-changers. They go where others can’t. They
              deliver real-time data to clients who need clarity now, not later.
              They eliminate offshore exposure and dramatically reduce carbon
              footprints—because safety and sustainability should never be
              compromised. <br /> <br />
              But our story isn’t just about equipment. It’s about people and
              partnership. Every client challenge is an opportunity we take
              personally. From international oil giants to indigenous energy
              companies, we walk alongside our clients to co-create solutions
              that are faster, safer, and smarter. When they face difficult
              logistics, regulatory pressure, or risky terrain, we don’t offer
              generic proposals—we offer customised, precision-engineered
              answers. <br /> <br />
              Our innovation is local. Our thinking is global. And our promise
              is simple: “We help you see deeper, reach farther, and operate
              smarter.” This is not the old way of doing surveys. This is
              Compass Survey—charting the next frontier in survey excellence,
              powered by technology and driven by purpose.
            </p>
            {moreText && (
              <p className="lg:hidden block font-obviously_r text-14 leading-[24px] text-brand_primary">
                So, we made a choice. <br />
                Instead of trying to win price wars or replicate global
                templates, we focused on what matters most: engineering
                home-grown, cutting-edge solutions that actually work here. We
                set out to remove risk, and increase precision—especially in the
                one place everyone else avoids: shallow waters. <br /> <br />
                At Compass Survey, we lead with technology, but we build with
                understanding. Our Uncrewed Survey Vehicles (USVs) aren’t just
                tools—they’re game-changers. They go where others can’t. They
                deliver real-time data to clients who need clarity now, not
                later. They eliminate offshore exposure and dramatically reduce
                carbon footprints—because safety and sustainability should never
                be compromised. <br /> <br />
                But our story isn’t just about equipment. It’s about people and
                partnership. Every client challenge is an opportunity we take
                personally. From international oil giants to indigenous energy
                companies, we walk alongside our clients to co-create solutions
                that are faster, safer, and smarter. When they face difficult
                logistics, regulatory pressure, or risky terrain, we don’t offer
                generic proposals—we offer customised, precision-engineered
                answers. <br /> <br />
                Our innovation is local. Our thinking is global. And our promise
                is simple: “We help you see deeper, reach farther, and operate
                smarter.” This is not the old way of doing surveys. This is
                Compass Survey—charting the next frontier in survey excellence,
                powered by technology and driven by purpose.
              </p>
            )}
            {!moreText ? (
              <p
                className="font-obviously_m text-[14px] lg:hidden"
                onClick={() => {
                  setMoreText(true);
                }}
              >
                Read More
              </p>
            ) : (
              <p
                className="font-obviously_m text-[14px] lg:hidden mt-4"
                onClick={() => {
                  setMoreText(false);
                }}
              >
                Read Less
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
