// src/components/BestSellers.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "./common/CustomButton";
import { useCart } from "../context/CartContext";
import { FilledHeartSvg, HeartSvg, LeftArrow, RightArrow } from "../utils/icons";

const BestSellers = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { addToCart } = useCart();
    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteClick = (i) => {
        setFavoriteItems((prev) => {
            const updated = prev.includes(i)
                ? prev.filter((item) => item !== i)
                : [...prev, i];

            toast[prev.includes(i) ? "error" : "success"](
                prev.includes(i) ? "Removed from Favorite 💔" : "Added to Favorite ❤️"
            );

            return updated;
        });
    };

    const handleShopNow = (item) => {
        addToCart({
            id: item.id,
            name: item.title,
            image: item.img,
            price: Number(item.price) || 0,
        });

        toast.success(`${item.title} added to cart 🛍️`, {
            position: "bottom-center",
            autoClose: 2000,
            theme: "colored",
            closeOnClick:true
        });
    };

    const topPositionimg = [
        "bottom-[21px]", "bottom-3", "bottom-[5px]",
        "bottom-[21px]", "-top-[80px]", "bottom-[5px]",
    ];

    return (
        <div className="">
            <div className="max-w-[1272px] mx-auto px-3 relative">
                <h2 className="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-[#112D49] text-center mb-4">
                    Bestsellers
                </h2>

                <div className="max-xl:hidden flex xl:absolute top-1/2 xl:-left-11 xl:-right-11 transform -translate-y-1/2 justify-between items-center px-4 z-10">
                    <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <LeftArrow />
                    </div>

                    <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <RightArrow />
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={15}
                    loop
                    centeredSlides={true}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    navigation={{
                        nextEl: '.next-buttonBestSellers',
                        prevEl: '.prev-buttonBestSellers',
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
                        <SwiperSlide className="pt-[100px]" key={item.id}>
                            <div className="max-w-[364px] hover:shadow-[0px_0px_11.4px_0px_#73A4E033] border border-[#112D4914] hover:border-transparent duration-300 rounded-[8px] p-4 flex flex-col justify-between min-h-[536px]">
                                <div>
                                    <div className="w-full h-[242px] bg-[#E5E4E2] flex items-center justify-center relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`absolute ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl w-8 h-8 flex justify-center items-center rounded-full bg-[#73A4E01F]"
                                            onClick={() => handleFavoriteClick(i)}
                                        >
                                            {favoriteItems.includes(i) ? <FilledHeartSvg /> : <HeartSvg />}
                                        </div>
                                    </div>
                                    <p className="font-bold text-2xl text-[#112D49] pt-4">{item.title}</p>
                                    <p className="text-[#41576D] pt-2">{item.description}</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="font-semibold text-2xl text-[#112D49]">
                                            ₹ {Number(item.price).toFixed(2)}
                                        </p>
                                        <div className="-mt-3">{item.svg && <item.svg />}</div>
                                    </div>
                                    <div className="mt-5 flex justify-between items-center gap-6">
                                        <CustomButton
                                            buttonText="Shop Now"
                                            buttonClass="bg-white !text-[#112D49] border border-[#112D49] hover:!bg-[#112D49] hover:!text-white w-full"
                                            onClick={() => handleShopNow(item)}
                                        />
                                        {item.shop && <item.shop />}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="xl:hidden flex justify-center gap-3 items-center px-4 z-10">
                    <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <LeftArrow />
                    </div>

                    <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <RightArrow />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BestSellers;
