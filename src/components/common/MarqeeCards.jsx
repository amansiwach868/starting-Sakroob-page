import React from 'react'

const MarqeeCards = ({ headingClass, img, heading }) => {
    return (
        <div className='p-4 rounded-[8px] border border-[#112D491A] w-[207px] flex justify-center items-center gap-3.5 mx-1.5 hover:shadow-[0px_2px_20px_0px_#112D491A] duration-300 active:scale-95'>
            <img src={img} alt="images" />
            <h3 className={headingClass}>{heading}</h3>
        </div>
    )
}

export default MarqeeCards
