import React from 'react';
import HeadingAndPara from './HeadingAndPara';

const ServicesCard = ({ children, heading, para, className, line }) => {
    return (
        <div className="relative w-full max-w-[350px] sm:max-w-none bg-[#F1F6FC] rounded-[12px] px-4 py-6 
            flex flex-col sm:flex-row sm:items-center sm:justify-start text-center sm:text-left items-center mx-auto gap-4 sm:gap-3">

            {/* Icon */}
            <div className={`w-[80px] h-[80px] sm:w-[47px] sm:h-[47px] rounded-full bg-[#73A4E0] 
                flex items-center justify-center ${className}`}>
                {children}
            </div>

            {/* Text */}
            <HeadingAndPara
                heading={heading}
                para={para}
                headingClass="text-[20px] sm:text-[16px] font-extrabold sm:font-bold text-black text-nowrap"
                paraClass="text-[18px] sm:text-[14px] text-black/70 mt-2 sm:mt-0 text-nowrap"
            />

            {/* Bottom center gradient (only on mobile) */}
            <div className={`sm:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#112D49] to-transparent opacity-20 ${line}`} />
        </div>
    );
};

export default ServicesCard;
