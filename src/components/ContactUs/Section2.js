import Section1BG from "assets/images/contact-sec-1-bg.webp";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location-pin.svg";
import { ReactComponent as Twitter } from "assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem]">
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <h3 className="font-obviously_m text-[24px] mb-6">
              Would you prefer to contact us directly?
            </h3>
            <div className="mb-[5rem]">
              <div className="flex items-center gap-6 mb-6">
                <PhoneIcon className="w-[50px] h-[50px]" />
                <p className="font-obviously_r text-14 leading-[24px]">
                  +234 806 411 7691
                </p>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <EmailIcon className="w-[50px] h-[50px]" />
                <p className="font-obviously_r text-14 leading-[24px]">
                  info@compasssurveyltd.com
                </p>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <LocationIcon className="w-[55px] h-[55px]" />
                <p className="font-obviously_r text-14 leading-[24px]">
                  DH03 Rainbow Town Estate Trans Amadi Industrial Layout Port
                  Harcourt, Nigeria
                </p>
              </div>
            </div>
            <p className="font-obviously_m text-[18px] mb-6 w-[50%]">
              Follow us across our social media platforms
            </p>
            <div className="flex items-center gap-4">
              <Twitter />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
