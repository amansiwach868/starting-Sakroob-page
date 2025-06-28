import React from 'react'

const MarqeePageCards = ({ headingClass, children, heading }) => {
    return (
        <div className='sm:p-4 px-3.5 py-3.5 rounded-[8px] border border-[#112D491A] sm:w-[207px] w-[159px] flex justify-center items-center gap-3.5 mx-1.5 hover:shadow-[0px_2px_20px_0px_#112D491A] duration-300'>
            <div className="md:w-[59px] md:h-[59px] sm:w-12 sm:h-12 w-10 h-10 rounded-full flex justify-center items-center bg-[#112D49]">
                {children}
            </div>
            <h3 className={headingClass}>{heading}</h3>
        </div>
    )
}

export default MarqeePageCards
