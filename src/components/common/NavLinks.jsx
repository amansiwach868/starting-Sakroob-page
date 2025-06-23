import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ children, className, to }) => {
    return (
        <NavLink className={`text-[16px] font-normal text-white ${className}`} to={to}>
            {children}
        </NavLink>
    );
  };

export default NavLinks
