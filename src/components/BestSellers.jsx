import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "./common/CustomButton";

const BestSellers = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteClick = (i) => {
        setFavoriteItems((prev) => {
            const updated = prev.includes(i)
                ? prev.filter((item) => item !== i)
                : [...prev, i];

            if (prev.includes(i)) {
                toast.error("Removed from Favorite 💔");
            } else {
                toast.success("Added to Favorite ❤️");
            }

            return updated;
        });
    };

    const topPositionimg = ["bottom-[21px]", "bottom-3", "bottom-[5px]", "bottom-[21px]", "-top-[80px]", "bottom-[5px]",];

    return (
        <div className="relative">
            <div className="max-w-[1272px] mx-auto px-3">
                <h2 className="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-[#112D49] leading-[120%] text-center mb-4">Bestsellers</h2>
                <div
                    ref={prevRef}
                    className="w-[38px] h-[38px] absolute top-[50%] left-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L6.79609 1" className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div
                    ref={nextRef}
                    className="w-[38px] h-[38px] absolute top-[50%] right-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1.20391 1" className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={15}
                    loop={true}
                    centeredSlides={true}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 10 },
                        640: { slidesPerView: 1.5, spaceBetween: 15 },
                        768: { slidesPerView: 2.5, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 15 },
                    }}
                >
                    {BESTSELLER_DATA.map((item, i) => (
                        <SwiperSlide className="pt-[100px]" key={i}>
                            <div className="max-w-[364px] w-full border border-[#ECEEF0] min-h-[536px] p-4 rounded-[8px] flex flex-col justify-between">
                                <div>
                                    <div className="w-full bg-[#E5E4E2] items-center h-[242px] flex justify-center rounded-[4px] relative overflow-visible">
                                        <img
                                            src={item.img}
                                            className={`absolute ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                            alt="img"
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl"
                                            onClick={() => handleFavoriteClick(i)}
                                        >
                                            {favoriteItems.includes(i) ? "💖" : "🤍"}
                                        </div>
                                    </div>
                                    <p className="font-bold text-2xl leading-[120%] pt-[19.35px] text-[#112D49]">
                                        {item.title}
                                    </p>
                                    <p className="leading-[150%] text-[#41576D] max-w-[332px] pt-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-2xl">{item.price}</p>
                                        <div className="-mt-3">
                                            {item.svg && <item.svg />}
                                        </div>
                                    </div>
                                    <div className="mt-[25px] flex justify-between items-center">
                                        <CustomButton
                                            buttonText="Shop Now"
                                            buttonClass="bg-white !text-[#112D49] border border-[#112D49] max-w-[260px] w-full hover:!bg-[#112D49] hover:!text-white"
                                        />
                                        {item.shop && <item.shop />}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </div>
    );
};

export default BestSellers;
