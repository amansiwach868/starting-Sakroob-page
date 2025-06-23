import React from 'react'
import HeadingAndPara from './HeadingAndPara'

const ServicesCard = ({ children, heading , para}) => {
    return (
        <div className='flex gap-2 justify-center items-center '>
            <div className="w-[47px] h-[47px] rounded-full flex justify-center items-center bg-[#73A4E0]">
                {children}
            </div>
            <HeadingAndPara heading={heading} headingClass={'text-[16px] font-bold'} para={para} paraClass={'text-[14px] font-normal leading-[120%]'}/>
        </div>
    )
}

export default ServicesCard
