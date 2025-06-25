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
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [selected, setSelected] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Order placed successfully 🎉');
    };

    return (
        <div className="max-w-[1280px] mx-auto my-5 px-3">
            <div className="flex xl:flex-row flex-col gap-6">
                <div className="xl:max-w-[740px] w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* CONTACT */}
                        <div className="flex justify-between mb-5">
                            <Heading headingText={'Contact'} />
                            <NavLink to={'/cart'}>
                                <CustomButton buttonClass="py-2 px-[26px] text-white" buttonText={'Back'} />
                            </NavLink>
                        </div>

                        <div className="mb-[35px]">
                            <Input
                                htmlFor={'email'}
                                labelText={'Email or mobile phone number'}
                                register={register('email', { required: 'Email is required' })}
                                error={errors.email}
                            />
                        </div>

                        {/* DELIVERY */}
                        <Heading headingText={'Delivery'} />

                        <div className="mt-5 mb-[26px]">
                            <Input
                                htmlFor={'country'}
                                labelText={'Country/ Region'}
                                register={register('country', { required: 'Country is required' })}
                                error={errors.country}
                            />
                        </div>

                        <div className="flex max-md:flex-col max-md:gap-[26px] justify-between gap-3 mb-[26px]">
                            <div className="w-full">
                                <Input htmlFor={'first-name'} labelText={'First name (Optional)'} register={register('firstName')} />
                            </div>
                            <div className="w-full">
                                <Input
                                    htmlFor={'last-name'}
                                    labelText={'Last name'}
                                    register={register('lastName', { required: 'Last name is required' })}
                                    error={errors.lastName}
                                />
                            </div>
                        </div>

                        <div className="mb-[26px]">
                            <Input
                                htmlFor={'address'}
                                labelText={'Address'}
                                register={register('address', { required: 'Address is required' })}
                                error={errors.address}
                            />
                        </div>

                        <div className="mb-[42px] flex gap-2 items-center">
                            <INFO />
                            <Subheading text={'Add a house number if you have one'} />
                        </div>

                        <div className="mb-[26px]">
                            <Input htmlFor={'apartment'} labelText={'Apartment, Suit, etc. (optional)'} register={register('apartment')} />
                        </div>

                        <div className="flex max-md:flex-col max-md:gap-[26px] gap-3 justify-between mb-[26px]">
                            <div className="w-full">
                                <Input
                                    htmlFor={'city'}
                                    labelText={'City'}
                                    register={register('city', { required: 'City is required' })}
                                    error={errors.city}
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    htmlFor={'emirate'}
                                    labelText={'Emirate'}
                                    register={register('emirate', { required: 'Emirate is required' })}
                                    error={errors.emirate}
                                />
                            </div>
                        </div>

                        {/* SHIPPING METHOD */}
                        <div className="mb-[42px] flex gap-2 items-center">
                            <input type="checkbox" id="checkbox" className="size-5 cursor-pointer" />
                            <label htmlFor="checkbox" className="cursor-pointer">
                                <Subheading text={'Save this information for next time'} />
                            </label>
                        </div>

                        <div className="mb-[42px]">
                            <p className="font-medium text-[18px] text-[#112D49] leading-[150%] mb-5">Shipping method</p>
                            <input type="text" value={'Standard (Example)'} disabled className="py-[14px] px-[28px] rounded-[12px] bg-[#F4F8F7] w-full" />
                        </div>

                        {/* PAYMENT */}
                        <Heading headingText={'Payment'} headingClass={'mb-1'} />
                        <Subheading text={'All transactions are secure and encrypted.'} subheadingClass={'mb-5'} />

                        <div className="border border-[#E8EBED] rounded-[12px] pt-[17px] pb-[14px] w-full">
                            {/* PayPal */}
                            <div className="flex justify-between items-center mb-[9px] px-[26px]">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="paypal"
                                        {...register('paymentMethod', { required: 'Select a payment method' })}
                                        checked={selected === 'paypal'}
                                        onChange={() => setSelected('paypal')}
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

                            {/* Credit/Debit Card */}
                            <div className={`px-[26px] ${selected === 'card' ? 'bg-[#FBFBFB] pt-[19px]' : 'mb-[9px]'}`}>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="card"
                                        {...register('paymentMethod', { required: 'Select a payment method' })}
                                        checked={selected === 'card'}
                                        onChange={() => setSelected('card')}
                                        className="accent-blue-600 size-[18px] cursor-pointer"
                                    />
                                    <Subheading text={'Credit Card/ Debit Card'} />
                                </label>
                            </div>

                            <div
                                className={`transition-all duration-200 overflow-hidden ${selected === 'card' ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 pointer-events-none'
                                    }`}
                            >
                                <div className="bg-[#FBFBFB] pt-[26px] pb-7">
                                    <div className="flex flex-col">
                                        <div className="flex max-md:flex-col max-md:gap-7 justify-between px-[26px] mb-7">
                                            <div className="md:max-w-[334px] w-full">
                                                <Subheading text={'Card Number'} subheadingClass={'!font-medium !text-[18px]'} />
                                                <input
                                                    type="text"
                                                    {...register('cardNumber', {
                                                        required: selected === 'card' && 'Card Number is required',
                                                        pattern: {
                                                            value: /^\d{16}$/,
                                                            message: 'Card Number must be 16 digits',
                                                        },
                                                    })}
                                                    className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                                />
                                                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
                                            </div>

                                            <div className="md:max-w-[334px] w-full">
                                                <Subheading text={'Name on Card'} subheadingClass={'!font-medium !text-[18px]'} />
                                                <input
                                                    type="text"
                                                    {...register('cardName', {
                                                        required: selected === 'card' && 'Card name is required',
                                                    })}
                                                    className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                                />
                                                {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>}
                                            </div>
                                        </div>

                                        <div className="flex max-md:flex-col max-md:gap-7 justify-between px-[26px]">
                                            <div className="md:max-w-[334px] w-full">
                                                <Subheading text={'Expire Date'} subheadingClass={'!font-medium !text-[18px]'} />
                                                <input
                                                    type="month"
                                                    {...register('expiryDate', {
                                                        required: selected === 'card' && 'Expiry date is required',
                                                    })}
                                                    className="py-[14px] px-4 rounded-[12px] bg-[#F4F8F7] w-full"
                                                />
                                                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
                                            </div>

                                            <div className="md:max-w-[334px] w-full relative">
                                                <Subheading text={'CVC'} subheadingClass={'!font-medium !text-[18px]'} />
                                                <input
                                                    type="text"
                                                    {...register('cvc', {
                                                        required: selected === 'card' && 'CVC is required',
                                                        pattern: {
                                                            value: /^[0-9]{3,4}$/,
                                                            message: 'Invalid CVC',
                                                        },
                                                    })}
                                                    className="py-[14px] pl-4 rounded-[12px] bg-[#F4F8F7] w-full pr-[75px]"
                                                />
                                                <span className="absolute top-[45px] right-[38px]">
                                                    <CVC />
                                                </span>
                                                {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bank Transfer */}
                            <div className="px-[26px]">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="bank"
                                        {...register('paymentMethod', { required: 'Select a payment method' })}
                                        checked={selected === 'bank'}
                                        onChange={() => setSelected('bank')}
                                        className="accent-blue-600 size-[18px] cursor-pointer"
                                    />
                                    <Subheading text={'Bank Transfer'} />
                                </label>
                                {errors.paymentMethod && <p className="text-red-500 text-sm mt-2">{errors.paymentMethod.message}</p>}
                            </div>
                        </div>

                        {/* Buy Now Button */}
                        <div className="mt-10">
                            <CustomButton
                                buttonText="Buy Now"
                                type="submit"
                                disabled={!isValid}
                                buttonClass={`w-full text-white ${isValid ? 'bg-[#112D49] hover:bg-opacity-80' : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                            />
                        </div>
                    </form>
                </div>

                {/* ORDER SUMMARY */}
                <div className="mt-[94px] mb-[132px] px-6 w-full mx-auto">
                    <h2 className="text-[34px] font-bold text-[#112D49] mb-10">Checkout</h2>
                    {cartItems.length > 0 ? (
                        <div>
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between gap-y-3 sm:flex-row flex-col items-center border p-4 rounded-lg">
                                        <div className="flex items-center gap-4">
                                            <img src={item.image} alt={item.name} className="w-[80px] h-[80px] object-contain rounded" />
                                            <div>
                                                <h4 className="text-[16px] font-semibold text-[#112D49]">{item.name}</h4>
                                                <p className="text-sm text-[#112D49] opacity-70 text-nowrap">
                                                    Price: ₹{item.price.toFixed(2)} × {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium text-[#112D49]">₹ {(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 border rounded-lg bg-[#F4F8F7]">
                                <div className="flex justify-between sm:flex-row flex-col gap-y-3 text-lg font-semibold text-[#112D49] mb-2">
                                    <span>Total Amount:</span>
                                    <span>₹ {totalAmount.toFixed(2)}</span>
                                </div>
                                <p className="text-sm text-[#112D49] opacity-80 mb-4">Taxes and shipping calculated at delivery.</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-2xl text-center text-[#112D49] opacity-80">No items in your cart.</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;
