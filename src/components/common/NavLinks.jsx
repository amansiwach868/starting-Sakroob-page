import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ children, className, to, onClick }) => {
    return (
        <NavLink onClick={onClick} className={`sm:text-[16px] text-[14px] font-normal text-white text-nowrap ${className}`} to={to}>
            {children}
        </NavLink>
    );
};

export default NavLinks
