// import Section1BG from "assets/images/contact-sec-1-bg.webp";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location-pin.svg";
import { ReactComponent as Twitter } from "assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";
import Input from "components/Inputs/Input";
import { useState } from "react";
import { DefaultDatepicker } from "components/Inputs/DefaultDatepicker";
import Button from "components/Inputs/Button";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[3rem] pb-[6rem]">
        <div className="grid grid-cols-2 gap-[4rem]">
          <div className="bg-[#F9F8F3] p-[3rem]">
            <p className="font-obviously_r text-16 leading-[24px]">
              Please fill out the form below with your contact details. One of
              our team members will be in touch as soon as possible
            </p>
            <div>
              <form className="space-y-6">
                <Input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  // readOnly={loading}
                  value={formData?.name}
                  onChange={handleChange}
                  showError={false}
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  // readOnly={loading}
                  value={formData?.phoneNumber}
                  onChange={handleChange}
                  showError={false}
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  // readOnly={loading}
                  value={formData?.emailAddress}
                  onChange={handleChange}
                  showError={false}
                />
                <div className="pt-4">
                  <select
                    className="w-full border-b border-gray-400 bg-[#00000000] py-2 focus:outline-none text-gray-600"
                    value={formData?.service}
                    // defaultValue=""
                    onChange={handleChange}
                  >
                    <option className="text-[#00000000]" value="" disabled>
                      Which of our services are you interested in?
                    </option>
                    <option value="survey">Survey Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="training">Training</option>
                  </select>
                </div>

                <p className="font-obviously_m text-[14px] pt-4">
                  Preferred Date and Time to be reached
                </p>

                <div className="md:flex justify-between ">
                  <div className="basis-[47%]">
                    <DefaultDatepicker
                      placeholder="Date"
                      containerVariant=""
                      minDate={new Date()}
                      maxDate={new Date("2030-12-31")}
                      onSelect={(e) =>
                        setFormData({ ...formData, preferredDate: e })
                      }
                      name="date"
                      startDate={formData.preferredDate}
                      // showCalender={true}
                    />
                  </div>
                  <div className="basis-[47%]">
                    <DefaultDatepicker
                      placeholder="Time"
                      showTimeSelectOnly={true}
                      dateFormat="h:mm aa"
                      showTimeSelect={true}
                      timeCaption="Select Start time"
                      onSelect={(e) =>
                        setFormData({ ...formData, preferredTime: e })
                      }
                      name="startTime"
                      value={formData.preferredTime}
                      timeIntervals={30}
                      // showTimeIcon={true}
                    />
                  </div>
                </div>
                <Button name={"Submit"} theme={"secondary"} arrowIcon={true} />
              </form>
            </div>
          </div>
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
