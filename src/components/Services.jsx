import React from 'react'
import ServicesCard from './common/ServicesCard'
import { Express, Gift, Premium, Return, Support } from '../utils/icons'

const Services = () => {
    return (
        <div className="sm:px-7 px-4 mt-[58px] max-w-[1440px] mx-auto">
            <div className='flex justify-center items-center rounded-[8px] px-2 bg-[#73A4E01A] min-h-[147px]'>
                <div className="flex flex-wrap flex-row w-full max-w-[1241px]">
                    <ServicesCard para={'Order Now'} heading={'EXPRESS Delivery'} children={<Express />} line={'max-md:hidden'} line2={'sm:!hidden'} />

                    <ServicesCard para={'30 days return'} heading={'Easy Return '} children={<Return />} line={'max-md:hidden'} line2={'sm:!hidden'} />

                    <ServicesCard para={'Premium Services'} heading={'24/7 Support'} children={<Gift />} line={'max-lg:hidden max-md:hidden'} line2={'sm:!hidden'} />

                    <ServicesCard para={'Up to 2 years'} heading={'Premium Warranty'} children={<Premium />} line={'max-xl:hidden'} line2={'sm:!hidden'} />

                    <ServicesCard para={'For Order'} heading={'Best Special Gift'} children={<Support />} line2={'!hidden'} line={'hidden '} />
                </div>
            </div>
        </div>
    )
}

export default Services
