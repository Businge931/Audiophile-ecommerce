import React from "react";
import headphon1 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

const ProductAbout = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[480px] h-[500px]">
        <img src={headphon1} alt="product" />
      </div>
      <div className="w-[600px]">
        <h5 className="text-[14px] text-primary uppercase opacity-50 leading-[10px] tracking-1 font-medium pb-3">
          New Product
        </h5>
        <h2 className="uppercase pb-5 font-bold text-[56px] tracking-[2px] leading-[58px]">
          XX99 Mark II Headphones
        </h2>
        <p className="text-[15px] font-[500] opacity-70 leading-[25px]  pb-5">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p className="font-bold text-lg pb-4">$ 2,999</p>
        <div className="flex gap-6">
          <div className="flex bg-white-300 justify-center items-center w-[120px]">
            <button className=" py-4 cursor-pointer hover:text-primary">
              -
            </button>
            <span className=" px-8 py-4">1</span>
            <button className=" py-4 cursor-pointer hover:text-primary">
              +
            </button>
          </div>
          <button className=" bg-primary text-white py-4 px-7 uppercase hover:bg-secondary">
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
