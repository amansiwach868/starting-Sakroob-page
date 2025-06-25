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
        });
    };

    const topPositionimg = [
        "bottom-[21px]", "bottom-3", "bottom-[5px]",
        "bottom-[21px]", "-top-[80px]", "bottom-[5px]",
    ];

    return (
        <div className="relative">
            <div className="max-w-[1272px] mx-auto px-3">
                <h2 className="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-[#112D49] text-center mb-4">
                    Bestsellers
                </h2>

                <div ref={prevRef} className="absolute left-[6%] top-1/2 z-10 w-[38px] h-[38px] border rounded-full flex items-center justify-center cursor-pointer group hover:bg-[#112D49]">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L6.79609 1" className="stroke-[#112D49] group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div ref={nextRef} className="absolute right-[6%] top-1/2 z-10 w-[38px] h-[38px] border rounded-full flex items-center justify-center cursor-pointer group hover:bg-[#112D49]">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1.20391 1" className="stroke-[#112D49] group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={15}
                    loop
                    centeredSlides
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
                        <SwiperSlide className="pt-[100px]" key={item.id}>
                            <div className="max-w-[364px] border rounded-[8px] p-4 flex flex-col justify-between min-h-[536px]">
                                <div>
                                    <div className="w-full h-[242px] bg-[#E5E4E2] flex items-center justify-center relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`absolute ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl"
                                            onClick={() => handleFavoriteClick(i)}
                                        >
                                            {favoriteItems.includes(i) ? "💖" : "🤍"}
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
                                    <div className="mt-5 flex justify-between items-center">
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
            </div>
            <ToastContainer />
        </div>
    );
};

export default BestSellers;
