import React from 'react'
import HeadingAndPara from './HeadingAndPara'

const ServicesCard = ({ children, heading , para}) => {
    return (
        <div className='flex gap-2 max-w-[205px] justify-start max-sm:flex-col max-sm:justify-center w-full items-center'>
            <div className="w-[47px] h-[47px] rounded-full flex justify-center items-center bg-[#73A4E0]">
                {children}
            </div>
            <HeadingAndPara heading={heading} headingClass={'text-[16px] font-bold text-nowrap max-sm:text-center'} para={para} paraClass={'text-[14px] font-normal leading-[120%] text-nowrap max-sm:text-center'}/>
        </div>
    )
}

export default ServicesCard
