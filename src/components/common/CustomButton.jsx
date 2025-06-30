import React from 'react'

const CustomButton = ({ buttonText, buttonClass, type, onClick }) => {
    return (
        <button onClick={onClick} type={type} className={`leading-[110%] px-5 py-4 rounded-[93px] duration-300 cursor-pointer bg-[#112D49] sm:text-base  text-[14px] text-nowrap font-medium active:scale-90 hover:text-[#112D49] hover:bg-white border border-transparent hover:border-[#112D49] ${buttonClass}`}>
            {buttonText}
        </button>
    )
}

export default CustomButton
