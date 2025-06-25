import React, { useEffect, useState } from 'react';
import NavLinks from './common/NavLinks';
import { Cart, DropDownSvg, Profile, Search, User, WishList } from '../utils/icons';
import headerLogo from '../assets/img/svg/logo.svg';
import headerLogo2 from '../assets/img/svg/logo2.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cartItems } = useCart();
    const [header, setHeader] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleHeader = () => setHeader(!header);

    useEffect(() => {
        document.body.style.overflow = header ? 'hidden' : '';
    }, [header]);

    const closeAll = () => {
        setHeader(false);
        setActiveDropdown(null);
    };

    return (
        <div className="w-full relative">
            <NavLink to="/" className="lg:flex hidden">
                <img
                    src={headerLogo}
                    alt="Header Logo"
                    className="absolute top-1/2 -translate-y-1/2 xl:left-[94px] left-6 xl:max-w-full max-w-[90px]"
                />
            </NavLink>

            <div className="w-full bg-[#112D49] md:py-5 sm:py-4 py-3">
                <div className="max-w-[976px] ml-auto xl:mr-[88px] mr-[12px] w-full px-3 flex justify-between xl:gap-10 gap-3 items-center">
                    <NavLink to="/" className="lg:hidden">
                        <img src={headerLogo2} alt="Logo" className="cursor-pointer max-w-[90px]" />
                    </NavLink>
                    <ul
                        className={`fixed top-0 right-0 w-full h-full z-40 bg-[#112D49] flex flex-col items-center justify-center gap-8 transform duration-300 ${header ? 'translate-x-0' : 'translate-x-full'
                            } lg:static lg:translate-x-0 lg:flex-row lg:bg-transparent lg:w-auto lg:h-auto`}
                    >
                        <li>
                            <NavLinks to="/categories" onClick={closeAll}>Categories</NavLinks>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'pc' ? null : 'pc')}
                                className="flex gap-2 items-center text-white text-[16px] text-nowrap"
                            >
                                PC Products <DropDownSvg />
                            </button>
                            {activeDropdown === 'pc' && (
                                <ul className="absolute top-full max-w-[260px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap"
                                        >
                                            Standard PC Components
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap"
                                        >
                                            Reference Earlier Examples
                                        </NavLinks>
                                    </li>
                                </ul>
                            )}

                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                                className="flex gap-2 items-center text-white text-[16px]"
                            >
                                Services <DropDownSvg />
                            </button>
                            {activeDropdown === 'services' && (
                                <ul className="absolute top-full max-w-[260px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap"
                                        >
                                            Diy services
                                        </NavLinks>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                                className="flex gap-2 items-center text-white text-[16px]"
                            >
                                Support <DropDownSvg />
                            </button>
                            {activeDropdown === 'support' && (
                                <ul className="absolute top-full w-[251px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li className='flex '>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            FAQ’s
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li className='flex '>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            Returns
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li className='flex'>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-[16px] font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            Contact
                                        </NavLinks>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li><NavLinks to="/about" onClick={closeAll}>About</NavLinks></li>
                        <li><NavLinks to="/blog" onClick={closeAll}>Blog</NavLinks></li>
                        <li><NavLinks to="/contact" onClick={closeAll}>Contact</NavLinks></li>

                        <li className="sm:hidden">
                            <div className="flex items-center gap-9 w-full max-w-[285px]">
                                <div className="flex gap-3.5 items-center">
                                    <User />
                                    <div className="h-10 border border-[#D9D9D9] w-0"></div>
                                    <WishList />
                                    <div className="h-10 border border-[#D9D9D9] w-0"></div>
                                    <Cart />
                                </div>
                                <div className="min-w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white">
                                    <Profile />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center justify-end gap-9 w-full max-w-[285px]">
                        <div className="flex gap-3.5 items-center max-sm:hidden">
                            <User />
                            <div className="h-10 border border-[#D9D9D9] w-0"></div>
                            <WishList />
                            <div className="h-10 border border-[#D9D9D9] w-0"></div>
                            <NavLink to="/cart" className="relative inline-block">
                                <Cart />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-[9px] -right-0 w-[7px] h-[7px] bg-[#73A4E0] rounded-full"></span>
                                )}
                            </NavLink>

                        </div>
                        <div
                            onClick={() => {
                                localStorage.removeItem('isLoggedIn');
                                navigate('/login');
                            }}
                            className="min-w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white max-sm:hidden"
                        >
                            <Profile />
                        </div>
                        <div onClick={toggleHeader} className="z-50 w-10 h-10 flex flex-col justify-center items-center gap-1 lg:hidden">
                            <span className={`w-6 h-[2px] bg-white rounded-full transition-transform ${header ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`w-6 h-[2px] bg-white rounded-full transition-opacity ${header ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-[2px] bg-white rounded-full transition-transform ${header ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[11px] px-4 w-full bg-[#F1F6FC]">
                <div className="flex py-2 px-3 sm:py-3.5 sm:px-[25px] w-full max-w-[689px] mx-auto bg-white rounded-[50px] shadow-[0px_2px_20px_0px_#112D491A] border border-[#112D491A]">
                    <input type="text" placeholder="Search..." className="w-full text-[16px] font-normal text-[#8392A0] outline-none" />
                    <Search />
                </div>
            </div>

            {header && (
                <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={toggleHeader}></div>
            )}
        </div>
    );
};

export default Header;
