import React from "react";

const Product = ({ product, productName }) => {
  return (
    <div className="flex gap-2 items-center flex-col justify-between">
      <div className="max-w-[270px]">
        <img src={product} alt="product1" />
      </div>
      <h4 className="text-[24px] leading-8 uppercase font-bold tracking-[1.5px]">
        {productName}
      </h4>
      <button className="uppercase text-white py-3 px-8 bg-primary hover:bg-secondary">
        See product
      </button>
    </div>
  );
};

export default Product;
