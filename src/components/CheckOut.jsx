
import React, { useState, useMemo, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";
import Heading from "./common/Heading";
import Subheading from "./common/Subheading";
import Input from "./common/Input";
import CustomButton from "./common/CustomButton";
import { CVC, INFO } from "../utils/icons";
import PayPal from "../assets/img/svg/paypal.svg";
import visa from "../assets/img/svg/visa.svg";
import master from "../assets/img/svg/master.svg";
import american from "../assets/img/svg/american.svg";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
    const { cartItems, clearCart } = useCart();
    const location = useLocation();
    const directItems = location.state?.items;
    const items = directItems || cartItems;

    const shippingCharge = 20;
    const totalAmount = useMemo(
        () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [items]
    );
    const totalWithShipping = totalAmount + shippingCharge;

    const [selected, setSelected] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    useEffect(() => {
        reset();
        setSelected("");
    }, [items, reset]);

    const onSubmit = (data) => {
        toast.success("Order placed successfully 🎉");
        reset();
        setSelected("");
        if (directItems) clearCart();
    };

    return (
        <div className="max-w-[1140px] mx-auto lg:mt-[120px] lg:mb-[108px] md:my-[100px] sm:my-[75px] my-[52px] px-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className="lg:max-w-[740px] w-full">
                        <div className="flex justify-between mb-5">
                            <Heading headingText="Contact" />
                            <NavLink to={directItems ? "/" : "/cart"}>
                                <CustomButton
                                    buttonClass="!py-2 !px-[26px] text-white"
                                    buttonText="Back"
                                />
                            </NavLink>
                        </div>

                        <div className="mb-[35px]">
                            <Input
                                htmlFor="email"
                                labelText="Email or mobile phone number"
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                                error={errors.email}
                            />
                        </div>

                        <Heading headingText="Delivery" />
                        <div className="mt-5 mb-[26px]">
                            <Input
                                htmlFor="country"
                                labelText="Country/ Region"
                                register={register("country", {
                                    required: "Country is required",
                                    minLength: { value: 2, message: "At least 2 characters" },
                                    maxLength: { value: 56, message: "Too long" },
                                })}
                                error={errors.country}
                            />
                        </div>

                        <div className="flex max-md:flex-col max-md:gap-[26px] justify-between gap-3 mb-[26px]">
                            <Input
                                htmlFor="first-name"
                                labelText="First name (Optional)"
                                register={register("firstName", {
                                    pattern: { value: /^[A-Za-z\s]*$/, message: "Letters only" },
                                    validate: (v) => !v || /^[A-Za-z\s]*$/.test(v),
                                })}
                                error={errors.firstName}
                            />
                            <Input
                                htmlFor="last-name"
                                labelText="Last name"
                                register={register("lastName", {
                                    required: "Last name is required",
                                    pattern: { value: /^[A-Za-z\s]*$/, message: "Letters only" },
                                })}
                                error={errors.lastName}
                            />
                        </div>

                        <div className="mb-4">
                            <Input
                                htmlFor="address"
                                labelText="Address"
                                register={register("address", {
                                    required: "Address is required",
                                    minLength: { value: 5, message: "Too short" },
                                })}
                                error={errors.address}
                            />
                        </div>

                        <div className="mb-[45px] flex gap-2 items-center">
                            <INFO />
                            <Subheading text="Add a house number if you have one" />
                        </div>

                        <Input
                            htmlFor="apartment"
                            labelText="Apartment, Suit, etc. (optional)"
                            register={register("apartment")}
                        />

                        <div className="mb-4 mt-[26px] flex max-md:flex-col max-md:gap-[26px] gap-3 justify-between">
                            <Input
                                htmlFor="city"
                                labelText="City"
                                register={register("city", {
                                    required: "City is required",
                                    pattern: { value: /^[A-Za-z\s]*$/, message: "Letters only" },
                                })}
                                error={errors.city}
                            />
                            <Input
                                htmlFor="emirate"
                                labelText="Emirate"
                                register={register("emirate", {
                                    required: "Emirate is required",
                                    pattern: { value: /^[A-Za-z\s]*$/, message: "Letters only" },
                                })}
                                error={errors.emirate}
                            />
                        </div>

                        <div className="mb-[42px] flex gap-2 items-center">
                            <input type="checkbox" id="checkbox" className="size-5 cursor-pointer" />
                            <label htmlFor="checkbox" className="cursor-pointer">
                                <Subheading text="Save this information for next time" />
                            </label>
                        </div>

                        <div className="mb-[42px]">
                            <p className="font-medium text-[18px] text-[#112D49] leading-[150%] mb-5">
                                Shipping method
                            </p>
                            <input
                                type="text"
                                value="Standard (Example)"
                                disabled
                                className="py-[14px] px-[28px] rounded-[12px] bg-[#F4F8F7] w-full"
                            />
                        </div>

                        <Heading headingText="Payment" headingClass="mb-1" />
                        <Subheading text="All transactions are secure and encrypted." subheadingClass="mb-[17px]" />

                        <div className="border border-[#E8EBED] rounded-[12px] pt-[17px] pb-[14px] w-full">
                            <div className="flex justify-between items-center mb-4 px-[26px]">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="paypal"
                                        {...register("paymentMethod", { required: "Select a payment method" })}
                                        checked={selected === "paypal"}
                                        onChange={() => setSelected("paypal")}
                                        className="accent-blue-600 size-[18px] cursor-pointer"
                                    />
                                    <img src={PayPal} alt="PayPal" />
                                </label>
                                <div className="flex gap-[6px]">
                                    <img src={visa} alt="visa" />
                                    <img src={master} alt="master card" />
                                    <img src={american} alt="american express" />
                                </div>
                            </div>

                            <div className={`px-[26px] ${selected === "card" ? "bg-[#FBFBFB] pt-[19px]" : "mb-[9px]"}`}>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="card"
                                        {...register("paymentMethod", { required: "Select a payment method" })}
                                        checked={selected === "card"}
                                        onChange={() => setSelected("card")}
                                        className="accent-blue-600 size-[18px] cursor-pointer"
                                    />
                                    <Subheading text="Credit Card/ Debit Card" />
                                </label>
                            </div>

                            {selected === "card" && (
                                <div className="bg-[#FBFBFB] pt-[26px] pb-7 transition-all duration-200 px-[26px]">
                                    <div className="flex max-md:flex-col max-md:gap-7 justify-between mb-7">
                                        <div className="md:max-w-[334px] w-full">
                                            <Subheading text="Card Number" subheadingClass="!font-medium !text-[18px] mb-3.5" />
                                            <input
                                                type="text"
                                                {...register("cardNumber", {
                                                    required: "Card Number is required",
                                                    pattern: { value: /^\d{16}$/, message: "Must be 16 digits" },
                                                })}
                                                className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                            />
                                            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
                                        </div>
                                        <div className="md:max-w-[334px] w-full">
                                            <Subheading text="Name on Card" subheadingClass="!font-medium !text-[18px] mb-3.5" />
                                            <input
                                                type="text"
                                                {...register("cardName", {
                                                    required: "Card name is required",
                                                    pattern: { value: /^[A-Za-z\s]+$/, message: "Letters only" },
                                                })}
                                                className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                            />
                                            {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="flex max-md:flex-col max-md:gap-7 justify-between">
                                        <div className="md:max-w-[334px] w-full">
                                            <Subheading text="Expire Date" subheadingClass="!font-medium !text-[18px] mb-3.5" />
                                            <input
                                                type="month"
                                                {...register("expiryDate", {
                                                    required: "Expiry date is required",
                                                    validate: (value) => {
                                                        const [y, m] = value.split("-").map(Number);
                                                        const now = new Date();
                                                        return y > now.getFullYear() || (y === now.getFullYear() && m >= now.getMonth() + 1)
                                                            ? true
                                                            : "Must be in the future";
                                                    },
                                                })}
                                                className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                            />
                                            {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
                                        </div>
                                        <div className="md:max-w-[334px] w-full relative">
                                            <Subheading text="CVC" subheadingClass="!font-medium !text-[18px] mb-3.5" />
                                            <input
                                                type="text"
                                                {...register("cvc", {
                                                    required: "CVC is required",
                                                    pattern: { value: /^[0-9]{3,4}$/, message: "Must be 3 or 4 digits" },
                                                })}
                                                className="py-[14px] pl-4 rounded-[12px] bg-[#F4F8F7] w-full pr-[75px]"
                                            />
                                            <span className="absolute top-[45px] right-[38px]"><CVC /></span>
                                            {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="px-[26px] pt-5">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="bank"
                                        {...register("paymentMethod", { required: "Select a payment method" })}
                                        checked={selected === "bank"}
                                        onChange={() => setSelected("bank")}
                                        className="accent-blue-600 size-[18px] cursor-pointer"
                                    />
                                    <Subheading text="Bank Transfer" />
                                </label>
                                {errors.paymentMethod && <p className="text-red-500 text-sm mt-2">{errors.paymentMethod.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="lg:max-w-[352px] w-full py-[14.5px] px-[14px] shadow-1 rounded-lg bg-white shadow-[0px_0px_11.4px_0px_#73A4E033]">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-[26px]">
                                <div className="flex items-center gap-[9px]">
                                    <div className="flex items-center justify-center min-w-[45px] h-[45px] bg-[#E9E9E9] border border-[#BABABA] rounded-sm relative">
                                        <img src={item.image} alt={item.title} className="max-w-[30px]" />
                                        <div className="size-[18px] flex items-center justify-center bg-[#C7C7C7] rounded-full absolute -top-[9px] -right-[9px] text-sm text-[#112D49]">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <p className="font-normal text-[14px] text-[#112D49]">{item.title}</p>
                                </div>
                                <p className="font-normal text-[14px] text-[#112D49] text-nowrap">₹ {(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}

                        <a href="#" className="font-medium text-[13px] text-[#73A4E0]">Have a coupon? Click here to enter your code</a>

                        <div className="mt-4 flex flex-row max-[415px]:flex-col gap-[10px] mb-[26px]">
                            <input type="text" placeholder="Coupon code" className="placeholder:font-normal placeholder:text-base placeholder:text-[#3F566B] py-[5.5px] px-[14px] w-full bg-[#F4F8F7] rounded-full" />
                            <button type="button" className="py-2 px-[15px] border border-[#112D49] rounded-full text-base font-medium text-[#112D49] whitespace-nowrap">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                            <p className="font-normal text-base text-[#5F6C72]">Subtotal</p>
                            <p className="font-normal text-[14px] text-[#112D49] text-nowrap">₹ {totalAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <p className="font-normal text-base text-[#5F6C72]">Shipping</p>
                            <p className="font-normal text-[14px] text-[#112D49] text-nowrap">₹ {shippingCharge.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <p className="font-normal text-base text-[#191C1F]">Total</p>
                            <p className="font-semibold text-base text-[#112D49] text-nowrap">₹ {totalWithShipping.toFixed(2)}</p>
                        </div>

                        <div className="mt-10">
                            <CustomButton
                                buttonText="Buy Now"
                                type="submit"
                                disabled={!isValid}
                                buttonClass={`w-full text-white ${isValid ? 'bg-[#112D49] hover:bg-opacity-80' : 'bg-gray-400 cursor-not-allowed'}`}
                            />
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;
