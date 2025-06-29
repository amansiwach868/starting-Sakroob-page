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
        if (header) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflowY = 'hidden';
            document.body.dataset.scrollY = scrollY;
        } else {
            const scrollY = document.body.dataset.scrollY || '0';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, parseInt(scrollY));
        }
    }, [header]);
      
      

    const closeAll = () => {
        setHeader(false);
        setActiveDropdown(null);
    };

    return (
        <div className="relative max-w-[1920px] w-full mx-auto">
            <NavLink to="/" className="min-[1100px]:flex hidden">
                <img
                    src={headerLogo}
                    alt="Header Logo"
                    className="absolute top-1/2 -translate-y-1/2 xl:left-[94px] left-6 xl:max-w-full max-w-[90px]"
                />
            </NavLink>

            <div className="w-full bg-[#112D49] md:py-5 sm:py-4 py-[13px]">
                <div className="max-w-[1000px] ml-auto xl:mr-[88px] mr-[12px] w-full px-3 flex justify-between xl:gap-[56px] gap-3 items-center">
                    <NavLink to="/" className="min-[1100px]:hidden ">
                        <img src={headerLogo2} alt="Logo" className="cursor-pointer max-w-[90px]" />
                    </NavLink>
                    <ul
                        className={`fixed top-0 right-0 w-full h-full z-40 bg-[#112D49] flex flex-col items-center justify-center gap-8 transform duration-300 ${header ? 'translate-x-0' : 'translate-x-full'
                            } min-[1100px]:static min-[1100px]:translate-x-0 min-[1100px]:flex-row min-[1100px]:bg-transparent min-[1100px]:w-auto min-[1100px]:h-auto`}
                    >
                        <li>
                            <a className='text-base font-normal relative text-white text-nowrap after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="#bestseller" onClick={closeAll}>Categories</a>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'pc' ? null : 'pc')}
                                className="flex gap-2 items-center text-white text-base text-nowrap cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                PC Products <DropDownSvg />
                            </button>
                            {activeDropdown === 'pc' && (
                                <ul className="absolute top-full max-w-[260px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap"
                                        >
                                            Standard PC Components
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap"
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
                                className="flex gap-2 items-center text-white text-base cursor-pointer relative text-nowrap after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Services <DropDownSvg />
                            </button>
                            {activeDropdown === 'services' && (
                                <ul className="absolute top-full max-w-[260px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap"
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
                                className="flex gap-2 items-center text-white text-base cursor-pointer relative text-nowrap after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Support <DropDownSvg />
                            </button>
                            {activeDropdown === 'support' && (
                                <ul className="absolute top-full w-[251px] left-1/2 max-sm:-translate-x-1/2 sm:left-0 mt-2 flex flex-col bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 z-50">
                                    <li className='flex '>
                                        <NavLinks
                                            to="/pc/laptops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            FAQ’s
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li className='flex '>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            Returns
                                        </NavLinks>
                                    </li>
                                    <div className="-mx-4 bg-[linear-gradient(90deg,_#112D4900_3.37%,_#112D49_51.44%,_#112D4900_100%)] h-[1px] my-4 w-full"></div>
                                    <li className='flex'>
                                        <NavLinks
                                            to="/pc/desktops"
                                            onClick={closeAll}
                                            className="text-base font-normal !text-[#112D49] text-nowrap w-full"
                                        >
                                            Contact
                                        </NavLinks>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li><a className='text-base font-normal text-white text-nowrap relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="#footer" onClick={closeAll}>About</a></li>
                        <li><a className='text-base font-normal text-white text-nowrap relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="#blog" onClick={closeAll}>Blog</a></li>
                        <li><a className='text-base font-normal text-white text-nowrap relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="#testimonials" onClick={closeAll}>Contact</a></li>

                        <li className="sm:hidden flex gap-4">
                            <div className="flex gap-3.5 items-center sm:hidden">
                                <div onClick={closeAll}><User /></div>
                                <div className="h-10 border border-[#D9D9D9] w-0"></div>
                                <NavLink onClick={closeAll} to="/wishlist" className="relative inline-block">
                                    <WishList />
                                </NavLink>
                                <div className="h-10 border border-[#D9D9D9] w-0"></div>
                                <NavLink onClick={closeAll} to="/cart" className="relative inline-block">
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
                                className="min-w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white sm:hidden"
                            >
                                <Profile />
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center justify-end gap-9 w-full max-w-[285px]">
                        <div className="flex gap-3.5 items-center max-sm:hidden">
                            <User />
                            <div className="h-10 border border-[#D9D9D9] w-0"></div>
                            <NavLink to="/wishlist" className="relative inline-block">
                                <WishList />
                            </NavLink>
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
                        <div onClick={toggleHeader} className="z-50 group h-[30px] w-[30px] flex flex-col justify-center items-center gap-1 min-[1100px]:hidden">
                            <span className={`w-1/2 ml-auto h-[2px] group-hover:w-full bg-white rounded-full transition-transform ${header ? 'w-full max-w-none rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`h-[2px] w-full bg-white rounded-full transition-opacity ${header ? 'opacity-0' : ''}`}></span>
                            <span className={`w-1/2 mr-auto h-[2px] group-hover:w-full bg-white rounded-full transition-transform ${header ? 'w-full max-w-none -rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[11px] px-4 w-full bg-[#F1F6FC]">
                <div className="flex py-[6px] px-3 sm:py-3.5 sm:px-[25px] w-full sm:max-w-[689px] max-w-[263px] mx-auto bg-white rounded-[50px] shadow-[0px_2px_20px_0px_#112D491A] border border-[#112D491A]">
                    <input type="text" placeholder="Search..." className="w-full text-base leading-[120%] font-normal text-[#8392A0] outline-none" />
                    <Search />
                </div>
            </div>

            {header && (
                <div className="fixed inset-0 bg-black/50 z-30 min-[1100px]:hidden" onClick={toggleHeader}></div>
            )}
        </div>
    );
};

export default Header;
