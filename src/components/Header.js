import React, { useCallback } from "react";
// import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";
import { ReactComponent as LogoBlack } from "assets/icons/logo-black.svg";
// import { ReactComponent as LightHamburger } from "assets/icons/hamburger.svg";
import { ReactComponent as DarkHamburger } from "assets/icons/hamburger-black.svg";
import Button from "./Inputs/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";

import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Header = () => {
  const { toggleMenu } = useModal();
  const menuOptions = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const test = useCallback(
    (item) => {
      const regex = new RegExp(item?.toLowerCase());
      // console.log("Got here", regex.exec(pathname));

      return regex.exec(pathname);
    },
    [pathname]
  );

  const lightTheme =
    pathname.toLowerCase().includes("faq") ||
    pathname.toLowerCase().includes("contact-us") ||
    pathname.toLowerCase().includes("solutions") ||
    pathname.toLowerCase().includes("terms-conditions") ||
    pathname.toLowerCase().includes("cookies-policy") ||
    pathname.toLowerCase().includes("privacy-policy");

  return (
    <motion.div
      // variants={fadeIn("up", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: true, amount: 0.7 }}
      className="absolute w-full py-[20px]"
    >
      <div
        className={`flex justify-between items-center h-[60px] lg:h-[80px] max-w-[1300px] w-[90%] 2xl:w-full m-auto rounded-[50px] ${
          lightTheme ? "bg-white" : "backdrop-blur-sm bg-white/10"
        }`}
      >
        <LogoBlack
          className="w-[5rem] xl:w-[9.5rem] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        {/* {lightTheme ? (
          <LogoBlack
            className="w-[5rem] xl:w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        ) : (
          <LogoWhite
            className="w-[5rem] xl:w-[6.5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        )} */}
        <div className="hidden lg:flex items-center gap-10">
          {menuOptions.map((item, index) => (
            <p
              key={index}
              className={`cursor-pointer font-qanelas_m text-14 pb-[5px] text-black ${
                test(item.name) ? "border-b-[1.5px border-brand_primary" : ""
              }`}
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Button
            name={"Get in Touch"}
            theme={"secondary"}
            onClick={() => {
              navigate("/contact-us");
            }}
          />
        </div>
        <div className="lg:hidden">
          <DarkHamburger onClick={() => toggleMenu()} />
          {/* {lightTheme ? (
            <DarkHamburger onClick={() => toggleMenu()} />
          ) : (
            <LightHamburger onClick={() => toggleMenu()} />
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
