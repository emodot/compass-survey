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

  // Determine if a menu item is active
  const isActive = useCallback(
    (item) => {
      // Normalize both to lowercase and check if pathname starts with the link
      // or includes the link (for subroutes)
      if (!item?.link) return false;
      // Exact match or subroute match
      return (
        pathname.toLowerCase() === item.link.toLowerCase() ||
        pathname.toLowerCase().startsWith(item.link.toLowerCase() + "/")
      );
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
        className={`flex justify-between items-center h-[60px] lg:h-[80px] max-w-[1300px] lg:w-[95%] w-[90%] 2xl:w-full m-auto rounded-[50px] ${
          lightTheme ? "bg-white" : "backdrop-blur-sm bg-white/10"
        }`}
      >
        <LogoBlack
          className="w-[9rem] lg:w-[9.5rem] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="hidden lg:flex items-center gap-10">
          {menuOptions.map((item, index) => {
            const active = isActive(item);
            return (
              <p
                key={index}
                className={`cursor-pointer font-qanelas_m text-14 pb-[5px] text-black transition-all duration-150
                  ${
                    active
                      ? "border-b-[1.5px] border-brand_primary font-bold"
                      : "border-b-[1.5px] border-transparent"
                  }
                  hover:bg-brand_secondary transition-colors duration-500 px-3 py-1 pt-2
                `}
                onClick={() => {
                  navigate(item.link);
                }}
              >
                {item.name}
              </p>
            );
          })}
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
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
