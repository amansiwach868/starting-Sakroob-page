import React from 'react';
import HeadingAndPara from './HeadingAndPara';

const ServicesCard = ({ children, heading, para, className, line }) => {
    return (
        <div className="relative xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full bg-[#F1F6FC] rounded-[12px] px-4 py-6 
            flex flex-col sm:flex-row sm:items-center sm:justify-start text-center sm:text-left items-center mx-auto gap-4 sm:gap-3">
            <div className={`size-[47px] rounded-full bg-[#73A4E0] 
                flex items-center justify-center ${className}`}>
                {children}
            </div>
            <HeadingAndPara
                heading={heading}
                para={para}
                headingClass="text-md font-bold text-black text-nowrap"
                paraClass="text-[14px] sm:text-md text-black/70 mt-1 sm:mt-0 text-nowrap"
            />
            <div className={`sm:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#112D49] to-transparent ${line}`} />
        </div>
    );
};

export default ServicesCard;
