import React from 'react'

const Input = ({ labelText, labelClass = "", htmlFor }) => {
    return (
        <div className={`bg-[#F4F8F7] rounded-[12px] py-[13px] px-[26px] flex flex-col ${labelClass} `}>
            <label htmlFor={`${htmlFor}`} className='font-normal text-[12px] text-[#8292A0] leading-[150%] '>
                {labelText}
            </label>
            <input type="text" id={`${htmlFor}`} className='text-[#3F566B] placeholder:font-normal placeholder:text-base ' />
        </div>
    )
}

export default Input