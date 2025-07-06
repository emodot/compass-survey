import { ReactComponent as Twitter } from "assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";
import Button from "components/Inputs/Button";
import { ReactComponent as LogoBlack } from "assets/icons/logo-black.svg";
import { useNavigate } from "react-router-dom";
import Input from "./Inputs/Input";
import { useState } from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Footer = () => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  return (
    <div className="bg-[#F0F0F0]">
      <div className="max-w-[1300px] m-auto">
        <div className="pt-[7rem] pb-[6rem] grid grid-cols-2">
          <div>
            <LogoBlack
              className="w-[5rem] xl:w-[10.5rem] cursor-pointer mb-6"
              onClick={() => {
                navigate("/");
              }}
            />
            <p className="font-obviously_r text-[12px] leading-[24px] mb-6 md:w-[80%]">
              Compass Survey Limited delivers topographic and offshore
              positioning services across Nigeria and Africa’s oil and gas
              industry. Backed by experienced personnel and advanced technology,
              we provide reliable, on-time solutions that consistently exceed
              client expectations.
            </p>
          </div>
          <div className="pl-[6rem]">
            <p className="font-obviously_m text-[18px] leading-[24px] mb-6 text-brand_primary">
              Want to stay updated with what’s happening at Compass Survey?
            </p>
            <p className="font-obviously_r text-[12px] leading-[24px] mb-4">
              Join our newsletter and be the first to know about our upcoming
              updates.
            </p>
            <Input
              placeholder="Email Address"
              type="email"
              id="emailAddress"
              name="emailAddress"
              // readOnly={loading}
              value={emailAddress}
              onChange={handleChange}
              showError={false}
            />
            <div className="flex gap-4">
              <Button name={"Subscribe"} theme={"secondary"} arrowIcon={true} />
            </div>
          </div>
        </div>
        <div className="border-t border-brand_primary py-[2rem] flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <p className="font-obviously_r text-[12px] leading-[24px] text-brand_primary">
              Projects
            </p>
            <div className="rounded-full bg-[#6E6E6E] w-[6px] h-[6px]"></div>
            <p className="font-obviously_r text-[12px] leading-[24px] text-brand_primary">
              Services
            </p>
            <div className="rounded-full bg-[#6E6E6E] w-[6px] h-[6px]"></div>
            <p className="font-obviously_r text-[12px] leading-[24px] text-brand_primary">
              About Us
            </p>
            <div className="rounded-full bg-[#6E6E6E] w-[6px] h-[6px]"></div>
            <p className="font-obviously_r text-[12px] leading-[24px] text-brand_primary">
              Blog
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-obviously_r text-[12px] leading-[24px] text-brand_primary">
              All rights reserved &copy; 2025
            </p>
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
