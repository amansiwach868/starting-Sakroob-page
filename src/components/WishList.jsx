import React from 'react';
import { DeleteIcon } from '../utils/icons';
import { useWishlist } from '../context/WishlistContext'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const WishList = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    const handleDelete = (id) => {
        removeFromWishlist(id);
        toast.info("Item removed from wishlist 💔");
    };

    return (
        <div className="md:mt-[94px] md:mb-[132px] sm:my-[80px] my-[60px]">
            <div className="max-w-[1140px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <h2 className='md:text-[34px] sm:text-[28px] text-[18px] font-bold text-[#112D49] leading-[100%]'>Your WishList</h2>
                    <NavLink className="font-medium sm:text-md text-xs leading-[100%] underline text-[#112D49]" to="/">
                        Continue Shopping
                    </NavLink>
                </div>

                {wishlistItems.length > 0 ? (
                    <div className="mt-14 w-full rounded-[12px] bg-[#F4F8F7] p-5 space-y-5">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row justify-between items-center gap-6 ">
                                <div className="flex gap-4 items-center w-full md:w-[60%]">
                                    <div className="relative min-w-[85px] h-[85px] border border-[#00000033] rounded flex items-center justify-center bg-[#E9E9E9]">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded object-contain max-w-full max-h-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium text-[#112D49]">{item.name}</h4>
                                        <p className="text-sm opacity-60 text-[#112D49]">₹ {Number(item.price).toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-[40%] flex justify-end">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-[#112D49] hover:opacity-70"
                                        aria-label={`Remove ${item.name} from wishlist`}
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                        <p className="mt-10 text-[#112D49] sm:text-xl text-md opacity-80 text-center">
                        Your wishlist is empty.
                    </p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default WishList;
