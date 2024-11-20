import React from "react";
import Navbar from "../components/Navbar";
import {  useNavigate } from "react-router-dom";

import ProductAbout from "../components/productDetails/ProductAbout";
import ShopProductsContainer from "../components/ShopProductsContainer";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";
import Product from "../components/productDetails/Product";

import imageGallery1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imageGallery2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imageGallery3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import product1 from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import product2 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import product3 from "../assets/shared/desktop/image-zx9-speaker.jpg";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-black">
        <Navbar />
      </header>
      <p
        // OnClick={() => navigate(-1)}
        className="text-[15px] font-[500] mx-[165px] py-10 text-black opacity-50 cursor-pointer hover:opacity-100"
      >
        Go back
      </p>
      <section className="mx-[165px]">
        <ProductAbout />
      </section>

      <section className="flex items-start gap-12 mx-[165px] mt-10">
        <div className="w-[635px]">
          <h4 className="font-bold text-[32px] leading-9 uppercase mb-6">
            Features
          </h4>
          <p className="opacity-50 text-[15px] font-[500] leading-6">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br />
          </p>
          <p className="pt-4 opacity-50 text-[15px] font-[500] leading-6">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[32px] leading-9 uppercase mb-6">
            In the box
          </h4>

          <p>
            <span className="text-[15px] text-primary font-bold"> 1x</span>
            <span className="text-[15px] font-[500] opacity-50 pl-4">
              Headphone Unit
            </span>
          </p>
          <p>
            <span className="text-[15px] text-primary font-bold"> 2x</span>
            <span className="text-[15px] font-[500] opacity-50 pl-4">
              Replacement Earcups
            </span>
          </p>
          <p>
            <span className="text-[15px] text-primary font-bold"> 1x</span>
            <span className="text-[15px] font-[500] opacity-50 pl-4">
              User Manual
            </span>
          </p>
        </div>
      </section>

      <section className="flex justify-between mx-[165px] max-h-[590px] m-12">
        <div className="flex flex-col justify-between">
          <div className="max-h-[590px] rounded-lg overflow-hidden">
            <img src={imageGallery1} alt="imageGallery1" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={imageGallery2} alt="imageGallery2" />
          </div>
        </div>
        <div className="max-h-[590px] rounded-lg overflow-hidden">
          <img src={imageGallery3} alt="imageGallery3" />
        </div>
      </section>

      <section>
        <h3 className="font-bold text-4xl text-center uppercase leading-8">
          You may also like
        </h3>
      </section>

      <section className="flex justify-between mx-[165px] my-10 pb-20">
        <Product product={product1} productName="XX99 MARK I" />
        <Product product={product2} productName="XX59" />
        <Product product={product3} productName="ZX9 SPEAKER" />
      </section>

      <ShopProductsContainer />
      <BestAudioGear />
      <Footer />
    </div>
  );
};

export default ProductDetails;
