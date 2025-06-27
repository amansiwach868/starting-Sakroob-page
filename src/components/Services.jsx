import React from 'react'
import ServicesCard from './common/ServicesCard'
import { Express, Gift, Premium, Return, Support } from '../utils/icons'

const Services = () => {
    return (
        <div className="sm:px-7 px-6 mt-[58px] max-w-[1440px] mx-auto">
            <div className='flex justify-center items-center rounded-[8px] px-2 bg-[#73A4E01A] min-h-[147px]'>
                <div className="flex flex-wrap flex-row w-full max-w-[1241px]">
                    <ServicesCard para={'Order Now'} heading={'EXPRESS Delivery'} children={<Express />} />

                    <ServicesCard para={'30 days return'} heading={'Easy Return '} children={<Return />} />

                    <ServicesCard para={'Premium Services'} heading={'24/7 Support'} children={<Gift />} />

                    <ServicesCard para={'Up to 2 years'} heading={'Premium Warranty'} children={<Premium />} />

                    <ServicesCard para={'For Order'} heading={'Best Special Gift'} children={<Support />} line={'!hidden'} />
                </div>
            </div>
        </div>
    )
}

export default Services
