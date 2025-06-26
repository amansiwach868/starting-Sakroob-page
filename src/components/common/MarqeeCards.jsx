import React from 'react'

const MarqeeCards = ({ headingClass, children, heading }) => {
    return (
        <div className='sm:p-4 px-3.5 py-3.5 rounded-[8px] border border-[#112D491A] w-[207px] flex justify-center items-center gap-3.5 mx-1.5 hover:shadow-[0px_2px_20px_0px_#112D491A] duration-300 active:scale-95'>
                <div className="md:w-[59px] md:h-[59px] sm:w-12 sm:h-12 w-10 h-10 rounded-full flex justify-center items-center bg-[#112D49]">
                    {children}
                </div>
            <h3 className={headingClass}>{heading}</h3>
        </div>
    )
}

export default MarqeeCards
