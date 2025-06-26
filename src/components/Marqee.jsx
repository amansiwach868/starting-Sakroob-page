import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqeeCards from './common/MarqeeCards'
import { Game, Graphic, Moniters, Smartwatch, Storage, Television } from '../utils/icons'

const Marqee = () => {
    return (
        <Marquee  className='sm:mt-[27px] mt-[21px]'>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Game'} children={<Game />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Game'} children={<Game />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />}/>
            <MarqeeCards headingClass={'md:text-[16px] sm:text-[14px] text-[12px] leading-[120%] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />}/>
        </Marquee>
  )
}

export default Marqee
