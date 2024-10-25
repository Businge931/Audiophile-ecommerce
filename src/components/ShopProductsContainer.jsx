import React from "react";
import ShopProduct from "./ShopProduct";

import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const ShopProductsContainer = () => {
  return (
    <section className="flex mx-[165px] bg-white my-20 items-center justify-between md:mx-[40px]">
      <ShopProduct
        thumbnail={headphones}
        productName="Headphones"
        alt="headphones"
      />
      <ShopProduct thumbnail={speakers} productName="Speakers" alt="alt" />
      <ShopProduct
        thumbnail={earphones}
        productName="Earphones"
        alt="Earphones"
      />
    </section>
  );
};

export default ShopProductsContainer;
