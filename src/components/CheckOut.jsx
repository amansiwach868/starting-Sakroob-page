import React, { useState } from 'react';
import Heading from './common/Heading';
import { ARROW, CVC, INFO } from '../utils/icons';
import Subheading from './common/Subheading';
import PayPal from '../assets/img/svg/paypal.svg';
import visa from '../assets/img/svg/visa.svg';
import master from '../assets/img/svg/master.svg';
import american from '../assets/img/svg/american.svg';
import Input from './common/Input';
import CustomButton from './common/CustomButton';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

const CheckOut = () => {
    const [selected, setSelected] = useState('credit');
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        toast.success("Order placed successfully 🎉");
    };

    return (
        <div>
            <div className="max-w-[1140px] mx-auto my-5 px-3 ">
                <div className='flex lg:flex-row flex-col gap-6 '>
                    <div className="max-w-[740px] w-full ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex justify-between mb-5 '>
                                <Heading headingText={'Contact'} />
                                <NavLink to={'/cart'}>
                                    <CustomButton buttonClass='py-2 px-[26px] text-white' buttonText={'Back'} />
                                </NavLink>
                            </div>

                            <div className='mb-[35px]'>
                                <Input htmlFor={'email'} labelText={'Email or mobile phone number'} />
                                {errors.email && <p className="text-red-500 text-sm px-2">Email is required</p>}
                                <input type="hidden" {...register("email", { required: true })} />
                            </div>

                            <Heading headingText={'Delivery'} />
                            <div className='mt-5 mb-[26px]'>
                                <Input htmlFor={'country'} labelText={'Country/ Region'} />
                                {errors.country && <p className="text-red-500 text-sm px-2">Country is required</p>}
                                <input type="hidden" {...register("country", { required: true })} />
                            </div>

                            <div className='flex max-md:flex-col max-md:gap-[26px] justify-between mb-[26px]'>
                                <div className='md:max-w-[361px] w-full'>
                                    <Input htmlFor={'first-name'} labelText={'First name (Optional)'} />
                                    <input type="hidden" {...register("firstName")} />
                                </div>
                                <div className='md:max-w-[361px] w-full'>
                                    <Input htmlFor={'last-name'} labelText={'Last name'} />
                                    {errors.lastName && <p className="text-red-500 text-sm px-2">Last name is required</p>}
                                    <input type="hidden" {...register("lastName", { required: true })} />
                                </div>
                            </div>

                            <div className='mb-[26px]'>
                                <Input htmlFor={'address'} labelText={'Address'} />
                                {errors.address && <p className="text-red-500 text-sm px-2">Address is required</p>}
                                <input type="hidden" {...register("address", { required: true })} />
                            </div>

                            <div className='mb-[42px] flex gap-2 items-center'>
                                <INFO />
                                <Subheading text={'Add a house number if you have one'} />
                            </div>

                            <div className='mb-[26px]'>
                                <Input htmlFor={'apartment'} labelText={'Apartment, Suit, etc. (optional)'} />
                                <input type="hidden" {...register("apartment")} />
                            </div>

                            <div className='flex max-md:flex-col max-md:gap-[26px] justify-between mb-[26px]'>
                                <div className='md:max-w-[361px] w-full'>
                                    <Input htmlFor={'city'} labelText={'City'} />
                                    {errors.city && <p className="text-red-500 text-sm px-2">City is required</p>}
                                    <input type="hidden" {...register("city", { required: true })} />
                                </div>
                                <div className='md:max-w-[361px] w-full'>
                                    <Input htmlFor={'emirate'} labelText={'Emirate'} />
                                    {errors.emirate && <p className="text-red-500 text-sm px-2">Emirate is required</p>}
                                    <input type="hidden" {...register("emirate", { required: true })} />
                                </div>
                            </div>

                            <div className='mb-[42px] flex gap-2 items-center'>
                                <input type="checkbox" id='checkbox' className='size-5 cursor-pointer' />
                                <label htmlFor="checkbox" className='cursor-pointer'>
                                    <Subheading text={'Save this information for next time'} />
                                </label>
                            </div>

                            <div className='mb-[42px]'>
                                <p className='font-medium text-[18px] text-[#112D49] leading-[150%] mb-5'>
                                    Shipping method
                                </p>
                                <input type="text" value={'Standard (Example)'} disabled className='py-[14px] px-[28px] rounded-[12px] bg-[#F4F8F7] w-full' />
                            </div>

                            <Heading headingText={'Payment'} headingClass={'mb-1'} />
                            <Subheading text={'All transactions are secure and encrypted.'} subheadingClass={'mb-5'} />

                            {/* --- PAYMENT METHOD --- */}
                            <div className='border border-[#E8EBED] rounded-[12px] pt-[17px] pb-[14px] '>
                                <div className='flex justify-between items-center mb-[9px] px-[26px] '>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="paypal"
                                            {...register("paymentMethod", { required: true })}
                                            checked={selected === 'paypal'}
                                            onChange={() => setSelected('paypal')}
                                            className="accent-blue-600 size-[18px] cursor-pointer"
                                        />
                                        <img src={PayPal} alt="PayPal" />
                                    </label>

                                    <div className='flex gap-[6px] '>
                                        <img src={visa} alt="visa" />
                                        <img src={master} alt="master card" />
                                        <img src={american} alt="american express" />
                                    </div>
                                </div>

                                <div className={`px-[26px] ${selected === 'card' ? 'bg-[#FBFBFB] transition-all duration-200 pt-[19px] ' : 'mb-[9px] '} `}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="card"
                                            {...register("paymentMethod", { required: true })}
                                            checked={selected === 'card'}
                                            onChange={() => setSelected('card')}
                                            className="accent-blue-600 size-[18px] cursor-pointer"
                                        />
                                        <Subheading text={'Credit Card/ Debit Card'} />
                                    </label>
                                </div>

                                {/* Show card details only if selected */}
                                <div className={`transition-all duration-200 overflow-hidden ${selected === 'card' ? 'opacity-100 max-h-[1000px] translate-y-0' : 'opacity-0 max-h-0 translate-y-4 pointer-events-none'}`}>
                                    <div className="bg-[#FBFBFB] pt-[26px] pb-7 ">
                                        <div className="flex flex-col">
                                            <div className='flex max-md:flex-col max-md:gap-7 justify-between px-[26px] mb-7 '>
                                                <div className='md:max-w-[334px] w-full '>
                                                    <Subheading text={'Card Number'} subheadingClass={'!font-medium !text-[18px] '} />
                                                    <input type="text" className='py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full ' />
                                                </div>
                                                <div className='md:max-w-[334px] w-full '>
                                                    <Subheading text={'Name on Card'} subheadingClass={'!font-medium !text-[18px] '} />
                                                    <input type="text" className='py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full ' />
                                                </div>
                                            </div>

                                            <div className='flex max-md:flex-col max-md:gap-7 justify-between px-[26px] '>
                                                <div className='md:max-w-[334px] w-full '>
                                                    <Subheading text={'Expire Date'} subheadingClass={'!font-medium !text-[18px] '} />
                                                    <input type="date" className='py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full ' />
                                                </div>
                                                <div className='md:max-w-[334px] w-full relative '>
                                                    <Subheading text={'CVC'} subheadingClass={'!font-medium !text-[18px] '} />
                                                    <input type="text" className='py-[14px] pl-4 rounded-[12px] bg-[#F4F8F7] w-full pr-[75px] ' />
                                                    <span className='absolute top-[45px] right-[38px] '><CVC /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='px-[26px]'>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="bank"
                                            {...register("paymentMethod", { required: true })}
                                            checked={selected === 'bank'}
                                            onChange={() => setSelected('bank')}
                                            className="accent-blue-600 size-[18px] cursor-pointer"
                                        />
                                        <Subheading text={'Bank Transfer'} />
                                    </label>
                                </div>

                                {/* Show error if no payment method selected */}
                                {errors.paymentMethod && (
                                    <p className="text-red-500 text-sm mt-2 px-[26px]">Please select a payment method</p>
                                )}
                            </div>


                            <div className="mt-10">
                                <CustomButton
                                    buttonText="Buy Now"
                                    buttonClass="w-full bg-[#112D49] text-white hover:bg-opacity-80"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Cart Summary Section (No changes here) */}
                    <div className="mt-[94px] mb-[132px] px-6 max-w-[1140px] mx-auto">
                        <h2 className="text-[34px] font-bold text-[#112D49] mb-10">Checkout</h2>

                        {cartItems.length > 0 ? (
                            <div>
                                <div className="space-y-6">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-[80px] h-[80px] object-contain rounded"
                                                />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-[#112D49]">{item.name}</h4>
                                                    <p className="text-sm text-[#112D49] opacity-70">
                                                        Price: ₹{item.price.toFixed(2)} × {item.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-lg font-medium text-[#112D49]">
                                                ₹ {(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 p-6 border rounded-lg bg-[#F4F8F7]">
                                    <div className="flex justify-between text-lg font-semibold text-[#112D49] mb-2">
                                        <span>Total Amount:</span>
                                        <span>₹ {totalAmount.toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-[#112D49] opacity-80 mb-4">
                                        Taxes and shipping calculated at delivery.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-2xl text-center text-[#112D49] opacity-80">
                                No items in your cart.
                            </p>
                        )}
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;
