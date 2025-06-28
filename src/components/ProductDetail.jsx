import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Heading from "./common/Heading";
import Para from "./common/Para";
import { Rating, MinusSvg, PlusSvg } from "../utils/icons";
import CustomButton from "./common/CustomButton";
import PopularProduct from "./PopularProduct";
import { useCart } from "../context/CartContext";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailTabs from "./ProductDetailTabs";

const ProductDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    if (!state) {
        return (
            <div className="text-center py-32 text-[#112D49] text-xl font-semibold">
                Product not found. Please go back to home.
            </div>
        );
    }

    const { id, title, description, price, img } = state;

    const colors = ["#010101", "#112D49", "#20E572", "#FFFFFF", "#73A4E0"];
    const [selectedColor, setSelectedColor] = useState("#EEF4FB");
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleBuyNow = () => {
        const product = {
            id,
            title,
            description,
            price,
            image: img,
            quantity,
            color: selectedColor,
        };
        navigate("/checkout", { state: { items: [product] } });
    };

    const handleAddToCart = () => {
        const product = {
            id,
            title,
            description,
            price,
            image: img,
            quantity,
            color: selectedColor,
        };

        addToCart(product);

        if (!toast.isActive("cart-add-success")) {
            toast.success("✅ Product added to cart!", {
                toastId: "cart-add-success",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };
    

    return (
        <div className="md:pt-[91px] sm:pt-[80px] pt-[60px]">
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap flex-row -mx-3">
                    <div className="w-full max-sm:flex sm:w-6/12 gap-5 px-3 mb-8 lg:mb-0">
                        <div
                            className=" sm:py-[44px] max-sm:max-w-[300px] sm:px-[42px] px-3 max-sm:flex justify-center items-center w-full rounded-[8px] mx-auto"
                            style={{ backgroundColor: selectedColor }}
                        >
                            <img
                                src={img}
                                alt={title}
                                className="max-w-[432px] w-full mx-auto"
                            />
                        </div>
                        <div className="flex max-sm:flex-col max-w-[517px] gap-[22px] sm:mt-4 justify-center lg:justify-start mx-auto">
                            {[1, 2, 3].map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-[#EEF4FB] h-full flex justify-center items-center sm:max-w-[156px] max-w-[100px] rounded-[4px] sm:px-[30px] sm:py-[9px] px-2.5 py-2.5"
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="max-w-[96px] w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full sm:w-6/12 px-3">
                        <Heading
                            headingClass="!text-[34px] text-left !leading-[100%] max-w-[568px] mx-auto lg:mx-0"
                            headingText={title}
                        />
                        <Para
                            paraClass="pt-4 max-w-[568px] mx-auto lg:mx-0"
                            paraText={description}
                        />
                        <Heading
                            headingClass="!text-[34px] text-left pt-4 max-w-[568px] mx-auto lg:mx-0"
                            headingText={`₹ ${Number(price).toFixed(2)}`}
                        />
                        <div className="pt-4 max-w-[568px] mx-auto lg:mx-0">
                            <Rating />
                        </div>

                        <div className="flex flex-col items-start gap-4 max-w-[568px] mx-auto lg:mx-0">
                            <Para paraText="Select Color" paraClass="!font-semibold pt-[24px]" />
                            <div className="flex items-center gap-[6.52px] flex-wrap">
                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-[29px] h-[29px] rounded-full flex items-center justify-center cursor-pointer border  
                    ${color === "#FFFFFF" ? "shadow" : ""} 
                    ${selectedColor === color ? "border-gray-400" : "border-transparent"}`}
                                        style={{ backgroundColor: color }}
                                    >
                                        {selectedColor === color && (
                                            <svg
                                                width="19"
                                                height="14"
                                                viewBox="0 0 19 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.4532 1.96968L7.33693 13.2388C7.24012 13.3372 7.12507 13.4154 6.99839 13.4687C6.87172 13.522 6.73591 13.5495 6.59874 13.5495C6.46158 13.5495 6.32577 13.522 6.19909 13.4687C6.07242 13.4154 5.95737 13.3372 5.86055 13.2388L0.997175 8.30853C0.900234 8.21026 0.823337 8.09359 0.770873 7.96519C0.718409 7.83679 0.691406 7.69917 0.691406 7.56019C0.691406 7.42122 0.718409 7.2836 0.770873 7.1552C0.823337 7.0268 0.900234 6.91013 0.997175 6.81186C1.09412 6.71359 1.2092 6.63563 1.33586 6.58245C1.46252 6.52926 1.59827 6.50189 1.73537 6.50189C1.87246 6.50189 2.00821 6.52926 2.13487 6.58245C2.26153 6.63563 2.37662 6.71359 2.47356 6.81186L6.59961 10.9946L16.9786 0.474766C17.1744 0.276295 17.4399 0.164795 17.7168 0.164795C17.9936 0.164795 18.2592 0.276295 18.455 0.474766C18.6507 0.673237 18.7607 0.942422 18.7607 1.2231C18.7607 1.50378 18.6507 1.77297 18.455 1.97144L18.4532 1.96968Z"
                                                    fill={selectedColor === "#FFFFFF" ? "black" : "white"}
                                                />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 max-w-[568px] mx-auto lg:mx-0">
                            <Para paraText="Select Quantity" paraClass="!font-semibold pt-[35px]" />
                            <div className="flex items-center">
                                <button
                                    onClick={decreaseQuantity}
                                    className="w-[48px] h-[44px] bg-[#73A4E0] text-white text-xl flex items-center justify-center rounded-l-[8px]"
                                >
                                    <MinusSvg />
                                </button>
                                <div className="w-[85px] h-[44px] border border-[#C2C2C2] text-[#586C80] text-[20px] justify-center flex items-center">
                                    {quantity.toString().padStart(2, "0")}
                                </div>
                                <button
                                    onClick={increaseQuantity}
                                    className="w-[48px] h-[44px] bg-[#112D49] text-white text-xl flex items-center justify-center rounded-r-[8px]"
                                >
                                    <PlusSvg />
                                </button>
                            </div>

                            <div className="sm:pt-[63px] pt-10 w-full">
                                <CustomButton
                                    buttonClass="!w-full !py-[17px] text-white"
                                    buttonText="Buy Now"
                                    onClick={handleBuyNow}
                                />
                                <CustomButton
                                    buttonClass="!w-full !py-[17px] mt-[20px] !bg-white !text-[#112D49] hover:!bg-[#112D49] hover:!text-white border !border-[#112D49]"
                                    buttonText="Add to Cart"
                                    onClick={handleAddToCart}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDetailTabs />

                <PopularProduct />

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

export default ProductDetail;
