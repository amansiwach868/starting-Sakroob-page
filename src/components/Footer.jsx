import React from "react";
import footerLogo from "../assets/img/svg/footer-logo.svg";
import Para from "./common/Para";
import {
  FacebookSvg,
  InstagramSvg,
  TwiterSvg,
  YoutubeSvg,
} from "../utils/icons";

const Footer = () => {
  return (
    <>
      <div className="bg-[#112D49] pt-[75px]">
        <div className="max-w-[1440px] mx-auto px-3">
          <div className="">
            <img className="mx-auto flex" src={footerLogo} alt="footer-logo" />
            <Para
              paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-4 !leading-[150%]"
              paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
            />
            <ul className="flex flex-wrap gap-2.5 justify-center pt-[27px]">
              <li>
                <a className="text-white" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Warranty
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-[10px] justify-center pt-[27px]">
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
            <div className="w-full bg-white h-1 mt-[82px]"></div>
            <div className="flex flex-wrap justify-between items-center max-w-[1440px] mx-auto py-[30px] gap-4 sm:gap-0 sm:flex-nowrap sm:justify-between">
              <p className="text-sm text-white text-center sm:text-left w-full sm:w-auto">
                term of service | Privacy Policy
              </p>
              <p className="text-sm text-white text-center sm:text-right w-full sm:w-auto">
                © {new Date().getFullYear()} Skaroob. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
