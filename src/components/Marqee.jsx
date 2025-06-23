import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqeeCards from './common/MarqeeCards'
import graphic from '../assets/img/svg/graphic-card-img.svg'
import game from '../assets/img/svg/game-img.svg'
import smartwatch from '../assets/img/svg/smart-watch-img.svg'
import televisition from '../assets/img/svg/televisition-img.svg'
import storage from '../assets/img/svg/ssd-img.svg'
import monitor from '../assets/img/svg/monitor-img.svg'

const Marqee = () => {
    return (
        <Marquee  className='mt-[27px]'>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} img={storage}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} img={game}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} img={monitor}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} img={smartwatch}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} img={televisition}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} img={graphic}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Storage (ssd)'} img={storage}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Game'} img={game}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Monitors'} img={monitor}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Smartwatch'} img={smartwatch}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Televisions'} img={televisition}/>
            <MarqeeCards headingClass={'text-[16px] font-bold text-[#112D49]'} heading={'Graphic Card'} img={graphic}/>
        </Marquee>
  )
}

export default Marqee
