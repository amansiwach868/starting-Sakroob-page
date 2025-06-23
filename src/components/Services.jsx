import React from 'react'
import ServicesCard from './common/ServicesCard'
import { Express, Gift, Line, Premium, Return, Support } from '../utils/icons'

const Services = () => {
    return (
        <div className='max-w-[1384px] mx-auto px-2 flex justify-center items-center min-h-[147px] rounded-[8px] bg-[#73A4E01A] mt-6'>
            <div className="flex justify-between items-center w-full max-w-[1241px]">
                <ServicesCard para={'Order Now'} heading={'EXPRESS Delivery'} children={<Express/>} />
                <Line />
                <ServicesCard para={'30 days return'} heading={'Easy Return '} children={<Return />} />
                <Line />
                <ServicesCard para={'Premium Services'} heading={'24/7 Support'} children={<Gift />} />
                <Line />
                <ServicesCard para={'Up to 2 years'} heading={'Premium Warranty'} children={<Premium />} />
                <Line />
                <ServicesCard para={'For Order'} heading={'Best Special Gift'} children={<Support />} />
            </div>
        </div>
    )
}

export default Services
