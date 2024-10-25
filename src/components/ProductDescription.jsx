import React from "react";
import { Link } from "react-router-dom";

const ProductDescription = ({
  subheading,
  heading,
  content,
  btn_primary,
  color,
  // reverseColor,
}) => {
  return (
    <div
      className={`flex flex-col items-start w-full md:items-center  ${
        color === "white" ? "text-white" : "text-black"
      }`}
    >
      <h5 className="text-[14px] uppercase opacity-50 leading-[10px] tracking-1 font-medium pb-3">
        {subheading}
      </h5>
      <h2 className="uppercase font-bold text-[56px] tracking-[2px] leading-[58px] md:text-center">
        {heading}
      </h2>
      <p className="text-[15px] font-[500] opacity-70 leading-[25px] pt-4 md:text-center">
        {content}
      </p>
      <Link to="">
        <button
          className={`uppercase text-[13px] my-4 py-3 px-8 cursor-pointer ${
            btn_primary
              ? "bg-primary hover:bg-secondary"
              : "bg-black hover:opacity-50 "
          } `}
        >
          See Product
        </button>
      </Link>
    </div>
  );
};

export default ProductDescription;
