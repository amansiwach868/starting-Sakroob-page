import React from "react";
import footerLogo from "../assets/img/svg/footer-logo.svg";
import Para from "./common/Para";
import {
  FacebookSvg,
  InstagramSvg,
  TwiterSvg,
  YoutubeSvg,
} from "../utils/icons";
import { Link,  useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  return (
    <>
      <div id="footer" className={`bg-[#112D49] ${isHomePage ? "md:pt-[215px] pt-[175px]" : "md:pt-[70px] sm:pt-[55px] pt-10"}`}>
        <div className="max-w-[1440px] mx-auto px-3">
          <div>
            <a href='#'>
              <img className="mx-auto pointer-events-none" src={footerLogo} alt="footer-logo" />
           </a>
            <Para
              paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-6 !leading-[150%]"
              paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
            />
            <ul className="flex max-sm:flex-wrap sm:justify-between justify-center items-center max-w-[384px] gap-y-3.5 mx-auto mt-[27px]">
              <li className="max-sm:w-1/3 flex justify-center">
                <a className="text-white sm:text-md text-[14px] font-medium" href="#bestseller">
                  Shipping
                </a>
              </li>
              <li className="max-sm:w-1/3 flex justify-center">
                <a className="text-white sm:text-md text-[14px] font-medium" href="#">
                  Warranty
                </a>
              </li>
              <li className="max-sm:w-1/3 flex justify-center">
                <a className="text-white sm:text-md text-[14px] font-medium" href="#">
                  FAQs
                </a>
              </li>
              <li className="max-sm:w-1/3 flex justify-center">
                <a className="text-white sm:text-md text-[14px] font-medium" href="#">
                  Blog
                </a>
              </li>
              <li className="max-sm:w-1/3 flex justify-center">
                <a className="text-white sm:text-md text-[14px] font-medium" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2.5 justify-center mt-[27px]">
              <a
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FacebookSvg />
              </a>
              <a
                href="https://www.instagram.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <InstagramSvg />
              </a>
              <a
                href="https://x.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <TwiterSvg />
              </a>
              <a
                href="https://www.youtube.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <YoutubeSvg />
              </a>
            </div>
            <div className="max-w-[1140px] w-full mx-auto md:mt-[82px] sm:mt-[62px] mt-10 relative z-0 pt-[1px] rounded-[12px] after:content-[''] after:absolute after:inset-0 after:rounded-[12px] after:bg-[linear-gradient(90deg,_#ffffff00_3.37%,_#ffffffcc_51.44%,_#ffffff00_100%)] after:-z-10">
              <div className="flex relative bg-[#112D49] rounded-[10px] flex-wrap justify-between items-center max-w-[1440px] mx-auto py-[30px] gap-4 sm:gap-0 sm:flex-nowrap sm:justify-between px-4">
                <p className="text-sm text-white text-center sm:text-left w-full sm:w-auto leading-[100%]">
                  Term of Service | Privacy Policy
                </p>
                <p className="text-sm text-white text-center sm:text-right w-full sm:w-auto leading-[120%]">
                  © {new Date().getFullYear()} Skaroob. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
