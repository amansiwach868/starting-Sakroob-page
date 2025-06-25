import React, { useState } from 'react';
import Heading from './common/Heading';
import productImage from '../assets/img/png/product.png';
import { DeleteIcon, IncreaseIcon, ReduceIcon } from '../utils/icons';
import CustomButton from '../components/common/CustomButton';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Gaming Chair',
            image: productImage,
            price: 5935.16,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Gaming Chair',
            image: productImage,
            price: 5935.16,
            quantity: 1,
        },
    ]);

    const increment = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrement = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="mt-[94px] mb-[132px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className='text-[34px] font-bold text-[#112D49] leading-[100%]'>Your cart </h2>
                    <a
                        className="font-medium leading-[100%] underline text-[#112D49]"
                        href="/"
                    >
                        Continue Shopping
                    </a>
                </div>

                {cartItems.length > 0 ? (
                    <div className="mt-14 w-full rounded-xl bg-[#F4F8F7] px-5">
                        <div className="hidden md:grid grid-cols-[40%_30%_30%] font-medium text-[#112D49] text-lg py-[18px] bg-[#F5F5F5] -mx-5 px-5 border-b border-[#112D491A]">
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Total</p>
                        </div>

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-1 md:grid-cols-[40%_30%_30%] items-center gap-5 my-9"
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="relative w-[85px] h-[85px] border rounded flex items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded object-contain"
                                        />
                                        <span className="absolute -top-4 left-[68px] size-[34px] bg-[#C7C7C7] rounded-full text-[#112D49] flex items-center justify-center text-sm">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium text-[#112D49]">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm opacity-60 text-[#112D49]">
                                            ₹ {item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-4 md:justify-start">
                                    <div className="flex">
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className="w-[44px] h-[40px] bg-[#73A4E0] hover:bg-[#73A4E0]/70 text-white rounded-l flex items-center justify-center"
                                        >
                                            <ReduceIcon />
                                        </button>
                                        <div className="w-[60px] h-[40px] border-y text-xl text-[#112D49] flex items-center justify-center">
                                            {item.quantity}
                                        </div>
                                        <button
                                            onClick={() => increment(item.id)}
                                            className="w-[44px] h-[40px] bg-[#112D49] hover:bg-[#112D49]/70 text-white rounded-r flex items-center justify-center"
                                        >
                                            <IncreaseIcon />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="ml-2 text-[#112D49] hover:opacity-70"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>

                                {/* Total Price */}
                                <div className="text-lg text-[#112D49] font-medium">
                                    ₹ {(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className="border-t mt-10 pt-6 flex justify-end">
                        <div className="max-w-[1140px] w-full mx-auto mt-[82px] relative z-0 pt-[1px] rounded-[12px] after:content-[''] after:absolute after:inset-0 after:rounded-[12px] after:bg-[linear-gradient(90deg,_#ffffff00_3.37%,_#ffffffcc_51.44%,_#ffffff00_100%)] after:-z-10"></div>
                            <div className="w-full max-w-[328px]">
                                <div className="flex justify-between items-center mb-2 text-[#112D49]">
                                    <p>Estimated total</p>
                                    <p className="font-semibold">
                                        ₹ {totalAmount.toFixed(2)}
                                    </p>
                                </div>
                                <p className="text-sm text-[#112D49] opacity-80 mb-4">
                                    Taxes, discounts and shipping calculated at checkout.
                                </p>
                                <CustomButton
                                    buttonClass="w-full bg-[#112D49] text-white hover:bg-opacity-80"
                                    buttonText="Check out"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="mt-10 text-[#112D49] opacity-80 text-2xl text-center">
                        Your cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CartPage;
