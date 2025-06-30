import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqeeCards from './common/MarqeeCards'
import { Game, Graphic, Monitors, Smartwatch, Storage, Television } from '../utils/icons'

const MarqeePage = () => {
    return (
        <Marquee className='sm:pt-[27px] pb-6 pt-[21px]'>
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Game'} children={<Game />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Monitors'} children={<Monitors />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Game'} children={<Game />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Monitors'} children={<Monitors />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />} />
            <MarqeeCards headingClass={'md:text-base sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />} />
        </Marquee>
    )
}

export default MarqeePage
