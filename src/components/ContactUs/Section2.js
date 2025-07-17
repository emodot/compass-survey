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
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

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
    <div className="lg:mt-[-7rem] mt-[-5rem]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:px-[4rem] px-[0] lg:pt-[3rem] pt-[2rem] pb-[6rem]">
        <div className="lg:grid grid-cols-2 gap-[4rem] items-center">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#F9F8F3] lg:p-[3rem] p-[1.5rem]"
          >
            <p className="font-obviously_r lg:text-16 text-[14px] leading-[24px]">
              Please fill out the form below with your contact details. One of
              our team members will be in touch as soon as possible
            </p>
            <div>
              <form className="space-y-10">
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
                    className="w-full border-b border-gray-400 bg-[#00000000] py-2 focus:outline-none text-gray-600 lg:text-[14px] text-[12px]"
                    value={formData?.service}
                    // defaultValue=""
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                    }}
                  >
                    <option className="text-[#00000000]" value="" disabled>
                      Which of our services are you interested in?
                    </option>
                    <option value="survey">Survey Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="training">Training</option>
                  </select>
                </div>

                <p className="font-obviously_m lg:text-[14px] text-[12px] pt-4">
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
          </motion.div>
          <div className="mt-[4rem] lg:mt-0">
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_m lg:text-[24px] text-[16px] mb-6"
            >
              Would you prefer to contact us directly?
            </motion.h3>
            <div className="mb-[5rem]">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6"
              >
                <PhoneIcon className="lg:w-[50px] w-[40px] lg:h-[50px] h-[40px]" />
                <p className="font-obviously_r text-14 leading-[24px]">
                  +234 806 411 7691
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6 cursor-pointer"
                onClick={() => {
                  window.open("mailto:info@compasssurveyltd.com", "_blank");
                }}
              >
                <EmailIcon className="lg:w-[50px] w-[40px] lg:h-[50px] h-[40px]" />
                <p className="font-obviously_r text-14 leading-[24px]">
                  info@compasssurveyltd.com
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6"
              >
                <div className="basis-[5%]">
                  <LocationIcon className="lg:w-[50px] w-[40px] lg:h-[50px] h-[40px]" />
                </div>
                <p className="basis-[95%] font-obviously_r text-14 leading-[24px]">
                  DH03 Rainbow Town Estate Trans Amadi Industrial Layout Port
                  Harcourt, Nigeria
                </p>
              </motion.div>
            </div>
            <motion.p
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_m lg:text-[18px] text-[16px] mb-6 lg:w-[50%] w-[80%]"
            >
              Follow us across our social media platforms
            </motion.p>
            <div className="flex items-center gap-4">
              <motion.div
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Twitter className="w-[30px] h-[30px]" />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 1.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Instagram className="w-[30px] h-[30px]" />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 1.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <LinkedIn className="w-[30px] h-[30px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
