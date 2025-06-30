import React from 'react';
import { DeleteIcon, IncreaseIcon, ReduceIcon } from '../utils/icons';
import CustomButton from '../components/common/CustomButton';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, increment, decrement, removeFromCart } = useCart();

    const handleDelete = (id) => {
        removeFromCart(id);

        if (!toast.isActive("cart-remove")) {
            toast.error("Item removed from cart 🗑️", {
                toastId: "cart-remove",
                position: "top-right",
            });
        }
    };


    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="md:mt-[94px] md:mb-[132px] sm:my-[90px] my-[60px]">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className='md:text-[34px] sm:text-[28px] text-[24px] font-bold text-[#112D49] leading-[100%]'>Your cart</h2>
                    <NavLink className="font-medium sm:text-base text-xs leading-[100%] underline text-[#112D49]" to="/">
                        Continue Shopping
                    </NavLink>
                </div>

                {cartItems.length > 0 ? (
                    <div className="mt-14 w-full rounded-[12px] bg-[#F4F8F7] px-5 pb-5">
                        <div className="hidden md:flex justify-between rounded-t-[12px] font-medium text-[#112D49] text-lg py-[18px] bg-[#F5F5F5] -mx-5 px-5 border-b border-[#112D491A]">
                            <p className="w-[40%]">Product</p>
                            <p className="w-[30%]">Quantity</p>
                            <p className="w-[30%]">Total</p>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row justify-between items-center gap-6 my-[47px]">
                                <div className="flex gap-4 items-center w-full md:w-[40%]">
                                    <div className="relative min-w-[85px] h-[85px] border border-[#00000033] rounded flex items-center justify-center bg-[#E9E9E9]">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded object-contain max-w-full max-h-full"
                                        />
                                        <span className="absolute -top-4 left-[68px] size-[34px] bg-[#C7C7C7] rounded-full text-[#112D49] flex items-center justify-center text-[24px]">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium text-[#112D49]">{item.name}</h4>
                                        <p className="text-sm opacity-60 text-[#112D49]">₹ {Number(item.price).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-[30%] md:justify-start justify-between">
                                    <div className="flex">
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className="w-[44px] h-[40px] cursor-pointer bg-[#73A4E0] hover:bg-[#73A4E0]/70 text-white rounded-l flex items-center justify-center"
                                        >
                                            <ReduceIcon />
                                        </button>
                                        <div className="w-[60px] h-[40px] border-y border-[#C2C2C2] text-xl text-[#112D49] flex items-center justify-center">
                                            {item.quantity > 9 ? '' : '0'}{item.quantity}
                                        </div>
                                        <button
                                            onClick={() => increment(item.id)}
                                            className="w-[44px] h-[40px] bg-[#112D49] cursor-pointer hover:bg-[#112D49]/70 text-white rounded-r flex items-center justify-center"
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

                                <div className="w-full md:w-[30%] sm:text-base  text-[14px] font-normal opacity-80 text-[#112D49]">
                                    ₹ {(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className="max-w-[1140px] w-full h-0 mx-auto relative z-0 pt-[1px] rounded-[12px] after:content-[''] after:absolute after:inset-0 after:rounded-[12px] after:bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] after:-z-10"></div>
                        <div className="pt-6 flex justify-end">
                            <div className="w-full max-w-[328px]">
                                <div className="flex justify-between items-center mb-2 text-[#112D49]">
                                    <p>Estimated total</p>
                                    <p className="font-semibold">
                                        ₹ {totalAmount.toFixed(2)}
                                    </p>
                                </div>
                                <p className="sm:text-base  text-[14px] text-[#112D49] opacity-80 mb-6">
                                    Taxes, discounts and shipping calculated at checkout.
                                </p>
                                <NavLink to={'/checkout'}>
                                    <CustomButton
                                        buttonClass="w-full bg-[#112D49] leading-[125%] text-white hover:bg-opacity-80"
                                        buttonText="Check out"
                                    />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="mt-10 text-[#112D49] opacity-80 text-2xl text-center">
                        Your cart is empty.
                    </p>
                )}
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

export default CartPage;
