import React from 'react'
import ServicesCard from './common/ServicesCard'
import { Express, Gift, Premium, Return, Support } from '../utils/icons'

const Services = () => {
    return (
        <div className="px-2 mt-[58px] max-w-[1384px] mx-auto">
            <div className='flex justify-center items-center rounded-[8px] bg-[#73A4E01A] px-2 min-h-[147px]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-[1241px]">
                    <ServicesCard para={'Order Now'} heading={'EXPRESS Delivery'} children={<Express />} />

                    <ServicesCard para={'30 days return'} heading={'Easy Return '} children={<Return />} />

                    <ServicesCard para={'Premium Services'} heading={'24/7 Support'} children={<Gift />} />

                    <ServicesCard para={'Up to 2 years'} heading={'Premium Warranty'} children={<Premium />} />

                    <ServicesCard para={'For Order'} heading={'Best Special Gift'} children={<Support />} />
                </div>
            </div>
        </div>
    )
}

export default Services
