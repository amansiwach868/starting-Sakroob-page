import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "./common/CustomButton";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FilledHeartSvg, HeartSvg, LeftArrow, RightArrow } from "../utils/icons";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const BestSellers = () => {
    const { addToCart } = useCart();
    const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    const handleFavoriteClick = (item) => {
        const isFavorited = wishlistItems.some(w => w.id === item.id);

        if (isFavorited) {
            removeFromWishlist(item.id);
            toast.error("Removed from Wishlist 💔");
        } else {
            addToWishlist({
                id: item.id,
                name: item.title,
                image: item.img,
                price: Number(item.price) || 0,
            });
            toast.success("Added to Wishlist ❤️");
        }
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
            closeOnClick: true,
        });
    };

    const handleViewDetails = (item) => {
        const cleanItem = {
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            img: item.img,
        };
        const slug = slugify(item.title, { lower: true });
        navigate(`/productdetails/${slug}`, { state: cleanItem });
    };

    const topPositionimg = [
        "bottom-[21px]", "bottom-3", "bottom-[5px]",
        "bottom-[21px]", "bottom-3", "bottom-[5px]",
    ];

    return (
        <div>
            <div id="bestseller">
                <div className="max-w-[1272px] mx-auto md:px-7 sm:px-6 px-4 relative">
                    <h2 className="md:text-[48px] sm:text-[36px] text-[28px] font-bold text-[#112D49] text-center mb-4">
                        Bestsellers
                    </h2>

                    <div className="max-[1400px]:hidden flex min-[1400px]:absolute min-[1400px]:bottom-[250px] min-[1400px]:-left-11 min-[1400px]:-right-11 justify-between items-center px-4 z-10">
                        <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>
                        <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        spaceBetween={15}
                        loop
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.next-buttonBestSellers',
                            prevEl: '.prev-buttonBestSellers',
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1.1, spaceBetween: 10 },
                            555: { slidesPerView: 1.5, spaceBetween: 10 },
                            700: { slidesPerView: 2, spaceBetween: 15 },
                            875: { slidesPerView: 2.5, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 15 },
                        }}
                    >
                        {BESTSELLER_DATA.map((item, i) => (
                            <SwiperSlide className="sm:pt-[86px] pt-[50px]" key={item.id}>
                                <div className="max-w-[364px] hover:shadow-[0px_0px_11.4px_0px_#73A4E033] border border-[#112D4914] hover:border-transparent duration-300 rounded-[8px] p-4 flex flex-col justify-between !min-h-[536px]">
                                    <div>
                                        <div className="w-full h-[242px] bg-[#E5E4E2] flex items-center justify-center relative">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className={`absolute ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                            />
                                            <div
                                                className="absolute sm:top-2.5 sm:right-2.5 top-[5px] -right-2 cursor-pointer text-xl w-8 h-8 flex justify-center items-center rounded-full bg-[#73A4E01F]"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleFavoriteClick(item);
                                                }}
                                            >
                                                {wishlistItems.some(w => w.id === item.id) ? <FilledHeartSvg /> : <HeartSvg />}
                                            </div>
                                        </div>
                                        <p className="font-bold text-2xl text-[#112D49] pt-4">{item.title}</p>
                                        <p className="text-[#41576D] pt-2">{item.description}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="font-semibold sm:text-2xl text-md text-[#112D49] text-nowrap">
                                                ₹ {Number(item.price).toFixed(2)}
                                            </p>
                                            <div className="-mt-3">{item.svg && <item.svg />}</div>
                                        </div>
                                        <div className="mt-5 flex justify-between items-center gap-6">
                                            <CustomButton
                                                buttonText="Shop Now"
                                                buttonClass="bg-white !text-[#112D49] !border !border-[#112D49] hover:!bg-[#112D49] hover:!text-white w-full"
                                                onClick={() => handleViewDetails(item)}
                                            />
                                            <div className="cursor-pointer" onClick={(e) => {
                                                e.stopPropagation();
                                                handleShopNow(item);
                                            }}>
                                                {item.shop && <item.shop />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mt-3 min-[1400px]:hidden flex justify-center gap-3 items-center px-4 z-10">
                        <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>
                        <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                </div>

                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    pauseOnFocusLoss={false}
                    pauseOnHover={true}
                    draggable={false}
                    limit={1}
                    transition={Slide}
                />
            </div>
        </div>
    );
};

export default BestSellers;
