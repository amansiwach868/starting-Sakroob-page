import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqeeCards from './common/MarqeeCards'
import { Game, Graphic, Moniters, Smartwatch, Storage, Television } from '../utils/icons'

const Marqee = () => {
    return (
        <Marquee  className='mt-[27px]'>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} children={<Game />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} children={<Storage />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} children={<Game />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} children={<Moniters />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} children={<Smartwatch />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} children={<Television />}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} children={<Graphic />}/>
        </Marquee>
  )
}

export default Marqee
