import React, { useState } from "react";
import Heading from "./common/Heading";
import { POPULAR_PRUDUCT_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import { FilledHeartSvg, HeartSvg } from "../utils/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopularProduct = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const handleFavoriteClick = (index) => {
        toast.dismiss();

        if (favoriteItems.includes(index)) {
            setFavoriteItems(favoriteItems.filter((item) => item !== index));
            toast.error("Removed from Favorite 💔");
        } else {
            setFavoriteItems([...favoriteItems, index]);
            toast.success("Added to Favorite ❤️");
        }
    };


    const handleShopNow = (item) => {
        console.log("Shop Now clicked:", item);
    };

    return (
        <div className="sm:py-[80px] py-10 overflow-x-hidden">
            <div className="max-w-[1140px] px-4 sm:px-6 mx-auto flex justify-center items-center flex-col">
                <Heading
                    headingClass="pb-[60px] text-center text-[32px] sm:text-[40px] md:text-[48px]"
                    headingText="Popular Products"
                />
                <div className="flex flex-wrap justify-center gap-y-[40px] -mx-2">
                    {POPULAR_PRUDUCT_DATA.map((item, index) => (
                        <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-2">
                            <div className="hover:shadow-[0px_0px_11.4px_0px_#73A4E033] border border-[#112D4914] hover:border-transparent duration-300 rounded-[8px] p-4 flex flex-col justify-between min-h-[520px] h-full">
                                <div>
                                    <div className="w-full min-h-[200px] bg-[#E5E4E2] flex items-center justify-center relative rounded">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`absolute w-[65%] max-w-[160px] object-contain ${index === 1 ? "-top-[30px]" : "-top-[50px]"}`}
                                        />
                                        <div
                                            className="absolute top-[10px] right-[10px] cursor-pointer text-xl w-8 h-8 flex justify-center items-center rounded-full bg-[#73A4E01F]"
                                            onClick={() => handleFavoriteClick(index)}
                                        >
                                            {favoriteItems.includes(index) ? <FilledHeartSvg /> : <HeartSvg />}
                                        </div>
                                    </div>
                                    <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#112D49] pt-4">
                                        {item.title}
                                    </p>
                                    <p className="text-[#41576D] pt-2 text-sm sm:text-base">{item.description}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-md sm:text-xl text-nowrap text-[#112D49]">
                                            ₹ {Number(item.price).toFixed(2)}
                                        </p>
                                        <div className="-mt-2">{item.svg && <item.svg />}</div>
                                    </div>
                                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <CustomButton
                                            buttonText="Shop Now"
                                            buttonClass="!bg-white !w-full !text-[#112D49] border !border-[#112D49] hover:!bg-[#112D49] hover:!text-white w-full sm:w-auto"
                                            onClick={() => handleShopNow(item)}
                                        />
                                        {item.shop && <div>{<item.shop />}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <CustomButton
                    buttonClass="!mx-auto text-white sm:mt-[58px] mt-10"
                    buttonText="Explore all products"
                />
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
    );
};

export default PopularProduct;
