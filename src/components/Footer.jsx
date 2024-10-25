import React from "react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../components/Navbar";

import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
const socialIcons = [facebook, twitter, instagram];

const Footer = () => {
  return (
    <footer className=" bg-black w-full px-[165px] pt-[75px] pb-[48px]">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-10">
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
      </nav>
      <div className="flex items-center justify-between pt-6">
        <div className="text-white opacity-50 w-[540px]">
          <p className="font-[500] text-[15px] leading-[25px] pb-10">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="flex gap-4">
          {socialIcons.map((icon) => (
            <img
              src={icon}
              alt={icon}
              className="hover:bg-primary cursor-pointer"
              key={icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
