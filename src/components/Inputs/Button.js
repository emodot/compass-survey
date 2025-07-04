import React from "react";
import BtnArrow from "assets/icons/btn-arrow.svg";
import BtnArrowSecondary from "assets/icons/btn-arrow-sec.svg";
// import PropTypes from "prop-types";

const Button = ({
  onClick,
  className,
  name,
  children,
  loading = false,
  theme,
  disabled,
  arrowIcon = false,
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`
                ${
                  theme === "primary" && !disabled
                    ? "bg-brand_primary text-white"
                    : ""
                }
                ${
                  theme === "white" && !disabled
                    ? "bg-white text-[#030D10]"
                    : ""
                }
                ${
                  theme === "primary" && disabled
                    ? "bg-[#ff727498] text-white cursor-not-allowed"
                    : ""
                }
                ${
                  theme === "secondary" && !disabled
                    ? "bg-brand_secondary text-[#192F36]"
                    : ""
                }
                ${
                  theme === "transparent" && !disabled
                    ? "border bg-[#f2f4f700]"
                    : ""
                }
                ${
                  theme === "full_transparent" && !disabled
                    ? "bg-[#f2f4f700] !p-0"
                    : ""
                }
        px-[16px] whitespace-nowrap flex justify-center items-center transition ease-in-out duration-500 rounded-[0px] h-[40px] w-fit text-14 font-obviously_m  ${className}`}
    >
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="24"
          height="24"
          viewBox="0 0 128 128"
        >
          <g>
            <path
              d="M75.4 126.63a11.43 11.43 0 01-2.1-22.65 40.9 40.9 0 0030.5-30.6 11.4 11.4 0 1122.27 4.87h.02a63.77 63.77 0 01-47.8 48.05v-.02a11.38 11.38 0 01-2.93.37z"
              fill={theme !== "transparent" ? "#FFFFFF" : "#E21C37"}
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 64 64"
              to="360 64 64"
              dur="1000ms"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      ) : (
        <div className="flex items-center gap-4">
          <div
            className={`pt-[4px] text-14 ${
              theme === "primary" ? "text-white" : ""
            }`}
          >
            {name || children}
          </div>
          {arrowIcon && (
            <img
              src={theme === "primary" ? BtnArrowSecondary : theme === "full_transparent" ? BtnArrowSecondary : BtnArrow}
              alt="arrow-right"
            />
          )}
        </div>
      )}
    </button>
  );
};

export default Button;

// Button.propTypes = {
//   name: PropTypes.string,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   children: PropTypes.element,
//   theme: PropTypes.string,
//   loading: PropTypes.bool,
//   className: PropTypes.string,
// };
