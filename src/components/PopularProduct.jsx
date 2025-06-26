import React, { useState } from "react";
import Heading from "./common/Heading";
import { POPULAR_PRUDUCT_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import { FilledHeartSvg, HeartSvg } from "../utils/icons";

const PopularProduct = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteClick = (index) => {
        if (favoriteItems.includes(index)) {
            setFavoriteItems(favoriteItems.filter((item) => item !== index));
            setPopupMessage("Removed from Favorite 💔");
        } else {
            setFavoriteItems([...favoriteItems, index]);
            setPopupMessage("Added to Favorite ❤️");
        }
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    return (
        <>
            <div className="py-[132px]">
                <div className="max-w-[1140px] px-3 mx-auto">
                    <Heading headClass="pb-[87px]" headText="Popular Products" />
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[24px] gap-y-[52px] max-md:gap-[48px]">
                        {POPULAR_PRUDUCT_DATA.map((item, index) => (
                            <div className="max-w-[364px] mx-auto hover:shadow-[0px_0px_11.4px_0px_#73A4E033] border border-[#112D4914] hover:border-transparent duration-300 rounded-[8px] p-4 flex flex-col justify-between min-h-[536px]">
                                <div>
                                    <div className="w-full h-[242px] bg-[#E5E4E2] flex items-center justify-center relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`absolute  ${index === 1 ? "-top-[30px]" : "-top-[50px]"}`}
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl w-8 h-8 flex justify-center items-center rounded-full bg-[#73A4E01F]"
                                            onClick={() => handleFavoriteClick(index)}
                                        >
                                            {favoriteItems.includes(index) ? <FilledHeartSvg /> : <HeartSvg />}
                                        </div>
                                    </div>
                                    <p className="font-bold text-2xl text-[#112D49] pt-4">{item.title}</p>
                                    <p className="text-[#41576D] pt-2">{item.description}</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="font-semibold text-2xl text-[#112D49] text-nowrap">
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularProduct;
