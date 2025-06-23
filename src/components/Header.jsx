import React from 'react'
import NavLinks from './common/NavLinks'
import { Cart, DropDownSvg, Profile, Search, User, WishList } from '../utils/icons'
import headerLogo from '../assets/img/svg/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full relative'>
            <NavLink to={'/'}><img src={headerLogo} alt="Header Logo" className='absolute top-1/2 -translate-y-1/2 left-[94px] cursor-pointer' /></NavLink>
            <div className="w-full bg-[#112D49] py-5">
                <div className="max-w-[976px] xl:ml-auto xl:mr-[100px] mx-auto w-full px-3 flex justify-between items-center">
                    <ul className='flex gap-8'>
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
                    </ul>
                    <div className="flex items-center gap-9">
                        <div className="flex gap-3.5 items-center">
                            <User />
                            <div className="h-10 border border-[#D9D9D9] w-0"></div>
                            <WishList />
                            <div className="h-10 border border-[#D9D9D9] w-0"></div>
                            <Cart/>
                        </div>
                        <div className="w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white">
                            <Profile/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[11px] w-full bg-[#F1F6FC]">
                <div className="flex py-3.5 px-[25px] max-w-[689px] mx-auto bg-white rounded-[50px] shadow-[0px_2px_20px_0px_#112D491A] border-[0.5px] border-[#112D491A]">
                    <input type="text" placeholder='Search...' className='w-full text-[16px] font-normal text-[#8392A0] outline-none'/>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Header
