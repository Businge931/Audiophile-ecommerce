import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
import menuIcon from "../assets/shared/tablet/icon-hamburger.svg";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Headphones", path: "/headphones" },
  { name: "Speakers", path: "/speakers" },
  { name: "Earphones", path: "/earphones" },
];

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center bg-transparent mx-[165px] border-b-[1px] border-[#495057] 
    // py-[35px] md:mx-[40px] md:py-[20px]
    "
    >
      <div className="md:flex items-center gap-6">
        <img src={menuIcon} alt="menu icon" className="lg:hidden md:h-4" />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-10 ">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.name}
            to={navLink.path}
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-white cursor-pointer hover:text-primary"
            }
          >
            {navLink.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
      <img
        src={cartIcon}
        alt="cart icon"
        className="hover:text-primary cursor-pointer"
        onClick={() => {}}
      />
    </nav>
  );
};

export default Navbar;
