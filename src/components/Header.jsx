import React, { useEffect, useState } from 'react'
import NavLinks from './common/NavLinks'
import { Cart, DropDownSvg, Profile, Search, User, WishList } from '../utils/icons'
import headerLogo from '../assets/img/svg/logo.svg'
import headerLogo2 from '../assets/img/svg/logo2.svg'
import { Navigate, NavLink } from 'react-router-dom'

const Header = () => {
    const [header, setHeader] = useState(false)
    const toggleHeader = () => {
        setHeader(!header)
    }

    useEffect(() => {
        if (header) {
            document.body.classList.add('max-lg:overflow-hidden')
        } else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }, [header])
    return (
        <div className='w-full relative'>
            <NavLink to={'/'} className='lg:flex hidden'><img src={headerLogo} alt="Header Logo" className='absolute top-1/2 lg:flex hidden -translate-y-1/2 xl:left-[94px] cursor-pointer left-6 xl:max-w-full max-w-[90px]' /></NavLink>
            <div className="w-full bg-[#112D49] md:py-5 sm:py-4 py-3">
                <div className="xl:max-w-[976px] max-w-[920px] ml-auto xl:mr-[88px] mr-[12px] w-full px-3 flex justify-between xl:gap-10 items-center">
                    <NavLink to={'/'} className="lg:hidden"><img src={headerLogo2} alt="Header Logo" className='lg:hidden cursor-pointer xl:max-w-full max-w-[90px]' /></NavLink>
                    <ul className={`flex xl:gap-8 gap-6 max-lg:items-center max-lg:flex-col max-lg:justify-center max-lg:h-screen max-lg:w-1/2 max-lg:absolute ${header ? 'right-0' : '-right-full'} duration-300 max-lg:bg-gray-600 top-0 z-40 max-sm:w-full`}>
                        <li><NavLinks to={"/categories"}>Categories</NavLinks></li>
                        <li><NavLinks className={'flex gap-2 items-center'}>
                            PC Products
                            <DropDownSvg />
                        </NavLinks></li>
                        <li><NavLinks className={'flex gap-2 items-center'}>Services <DropDownSvg /></NavLinks></li>
                        <li><NavLinks className={'flex gap-2 items-center'}>Support <DropDownSvg /></NavLinks></li>
                        <li><NavLinks to={"/about"}>About</NavLinks></li>
                        <li><NavLinks to={"/blog"}>Blog</NavLinks></li>
                        <li><NavLinks to={"/contact"}>Contact</NavLinks></li>
                        <li className='sm:hidden'> <div className="flex items-center gap-9 w-full max-w-[285px]">
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
                    <div className="flex items-center justify-end gap-9 w-full max-w-[285px] ">
                        <div className="flex gap-3.5 items-center max-sm:hidden">
                            <User />
                            <div className="h-10 border border-[#D9D9D9] w-0 max-sm:hidden"></div>
                            <WishList />
                            <div className="h-10 border border-[#D9D9D9] w-0 max-sm:hidden"></div>
                            <Cart />
                        </div>
                        <div onClick={() => {
                            localStorage.removeItem("isLoggedIn");
                            window.location.reload();
                            Navigate("/login");
                        }} className="min-w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white max-sm:hidden">
                            <Profile />
                        </div>
                        <div onClick={toggleHeader} className="relative z-50 md:max-w-10 sm:max-w-7 max-w-[18px] w-full h-full flex flex-col gap-1 items-center group lg:hidden">
                            <span className={`md:max-w-10 group-hover:w-full duration-300 sm:border-[2px] border-white border-[1.5px] w-1/2 ml-auto rounded-full ${header ? 'rotate-45 absolute top-1/2 -translate-y-1/2 !w-full' : ''}`}></span>
                            <span className={`md:max-w-10 group-hover:w-full duration-300 sm:border-[2px] border-white border-[1.5px] w-full rounded-full ${header ? 'opacity-0' : ''}`}></span>
                            <span className={`md:max-w-10 group-hover:w-full duration-300 sm:border-[2px] border-white border-[1.5px] w-1/2 mr-auto rounded-full ${header ? '-rotate-45 absolute top-1/2 -translate-y-1/2 !w-full' : ''}`}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[11px] px-[56px] w-full bg-[#F1F6FC]">
                <div className="flex sm:py-3.5 py-2 sm:px-[25px] px-3.5 sm:max-w-[689px] mx-auto bg-white rounded-[50px] shadow-[0px_2px_20px_0px_#112D491A] border-[0.5px] border-[#112D491A]">
                    <input type="text" placeholder='Search...' className='w-full text-[16px] font-normal text-[#8392A0] outline-none' />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Header
