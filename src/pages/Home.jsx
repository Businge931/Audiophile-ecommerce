import React from "react";

import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductDescription";
import Footer from "../components/Footer";
import BestAudioGear from "../components/BestAudioGear";
import ShopProductsContainer from "../components/ShopProductsContainer";

import homeSpeaker from "../assets/home/desktop/image-speaker-zx9.png";
import homeSpeakerTablet from "../assets/home/tablet/image-speaker-zx9.png";
import homeEarphone from "../assets/home/desktop/image-earphones-yx1.jpg";
import homeEarphoneTablet from "../assets/home/tablet/image-earphones-yx1.jpg";

const Home = () => {
  return (
    <>
      <header className="relative h-[100vh] bg-home-bg  md:bg-contain md:bg-center">
        <Navbar />
        <div className="absolute top-60 ml-[165px] w-[353px] md:ml-0 md:left-[30%]">
          <ProductDescription
            subheading="New Product"
            heading="XX99 MARK II Headphones"
            content=" Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
            btn_primary
            color="white"
          />
        </div>
      </header>
      <ShopProductsContainer />

      <section className="flex items-center justify-evenly overflow-hidden bg-primary h-[500px] mx-[165px] mb-8 md:mx-[40px] md:flex-col md:h-[720px]">
        <div className="h-[450px] w-auto translate-y-9 md:translate-y-0 md:h-[237px]">
          <img
            src={homeSpeaker}
            alt="home speaker"
            className="h-full md:hidden"
          />
          <img src={homeSpeakerTablet} alt="home speaker" className="h-full" />
        </div>
        <div className="w-[349px]">
          <ProductDescription
            heading="zx9 speaker"
            content="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            color="white"
          />
        </div>
      </section>

      <section className="h-[320px] bg-zx7-speaker mx-[165px] bg-no-repeat mb-8 bg-cover relative md:mx-[40px] md:bg-zx7-speaker-tablet">
        <div className="absolute top-[40%] left-[95px]">
          <h4 className="uppercase font-bold text-[28px] tracking-[2px] leading-[28px]">
            zx7 speaker
          </h4>
          <button className="uppercase text-[13px] my-4 py-3 text-white px-5 cursor-pointer bg-black hover:opacity-50 ">
            See product
          </button>
        </div>
      </section>

      <section className="flex justify-between mx-[165px] h-[320px] md:mx-[40px]">
        <div>
          <img src={homeEarphone} alt="earphone" className="md:hidden" />
          <img
            src={homeEarphoneTablet}
            alt="earphone"
            className=" h-[320px] rounded-lg"
          />
        </div>
        <div className="bg-white-300 h-full w-[540px] relative md:w-[339px] md:rounded-lg">
          <div className="absolute top-[30%] left-[95px]">
            <h4 className="uppercase font-bold text-[28px] tracking-[2px] leading-[28px]">
              yx1 Earphones
            </h4>
            <button className="uppercase text-[13px] my-4 py-3 text-white px-5 cursor-pointer bg-black hover:opacity-50 ">
              See product
            </button>
          </div>
        </div>
      </section>
      <BestAudioGear />
      <Footer />
    </>
  );
};

export default Home;
