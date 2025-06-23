import React from 'react'

const MarqeeCards = ({ headingClass, children, heading }) => {
    return (
        <div className='p-4 rounded-[8px] border border-[#112D491A] w-[207px] flex justify-center items-center gap-3.5 mx-1.5 hover:shadow-[0px_2px_20px_0px_#112D491A] duration-300 active:scale-95'>
                <div className="w-[59px] h-[59px] rounded-full flex justify-center items-center bg-[#112D49]">
                    {children}
                </div>
            <h3 className={headingClass}>{heading}</h3>
        </div>
    )
}

export default MarqeeCards
