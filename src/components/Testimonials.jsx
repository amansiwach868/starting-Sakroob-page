import React from 'react';
import Heading from './common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { TESTMONIAL_DATA } from '../utils/helper';
import { LeftArrow, LeftQuotationIcon, Rating, RightArrow, RightQuotationIcon } from '../utils/icons';

const Testimonials = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8 mt-20">
            <div className="max-w-[1140px] mx-auto">
                <p className="text-center italic text-lg md:text-xl text-[#112D49] mb-2">
                    Testimonials
                </p>
                <h2 className='leading-[120%] text-center text-[48px] font-bold text-[#112D49]'>What our client’s says </h2>
                <div className="mt-10 relative">
                    <div className="max-xl:hidden flex xl:absolute top-1/2 xl:-left-14 xl:-right-14 2xl:-left-20 2xl:-right-20 transform -translate-y-1/2 justify-between items-center px-4 z-10">
                        <div className="swiper-arrow prev-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                    <Swiper
                        navigation={{
                            nextEl: '.next-button',
                            prevEl: '.prev-button',
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {TESTMONIAL_DATA.map((data, i) => (
                            <SwiperSlide key={i} className="flex justify-center p-2">
                                <div className="w-full max-w-[558px] px-4 py-6 rounded-md mx-auto text-center duration-300 hover:shadow-[0px_2px_20px_0px_#112D491A]">
                                    <img
                                        className="mx-auto w-20 h-20 object-cover rounded-full"
                                        src={data.image}
                                        alt="client-img"
                                    />
                                    <div className="pt-4 leading-[150%] text-[#112D49] opacity-80">
                                        <p className="flex-1">
                                            <LeftQuotationIcon />
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                            <RightQuotationIcon />
                                        </p>
                                    </div>
                                    <Rating />
                                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-3">
                                        {data.heading}
                                    </p>
                                    <p className="text-[#112D49]">{data.work}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="xl:hidden flex justify-center gap-3 items-center px-4 z-10">
                        <div className="swiper-arrow prev-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
