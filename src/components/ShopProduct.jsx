import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

const ShopProduct = ({ thumbnail, alt, productName }) => {
  return (
    <div className="flex flex-col pb-6 items-center h-[170px] w-[330px] bg-white-300 md:w-[220px] md:h-[160px]">
      <div className="h-[140px] -mt-12">
        <img src={thumbnail} alt={alt} className="w-auto h-full" />
      </div>
      <h3 className="font-bold uppercase text-[18px] leading-[25px] tracking-[1.28px] text-black">
        {productName}
      </h3>
      <Link to={`/${productName}`}>
        <button className="flex items-center mt-3 hover:text-primary gap-2 font-bold text-[13px] leading-[18px] uppercase cursor-pointer ">
          <span className="opacity-50">Shop</span>
          <span className="opacity-100">
            <img src={arrowRight} alt="icon arrow right" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ShopProduct;
