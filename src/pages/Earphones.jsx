import React from "react";
import Navbar from "../components/Navbar";
import AboutProduct from "../components/AboutProduct";

import earphone from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";
import ShopProductsContainer from "../components/ShopProductsContainer";

const Earphones = () => {
  return (
    <>
      <header className="bg-black relative h-60">
        <Navbar />
        <h1 className="text-white uppercase text-center py-8 text-[40px] font-bold">
          Earphones
        </h1>
      </header>
      <section className="my-8">
        <AboutProduct
          subheading="New product"
          heading="ZX9 SPEAKER"
          content="Upgrade your sound system with the all new ZX9 active speaker. It’s a 
          bookshelf speaker system that offers truly wireless connectivity -- 
          creating new possibilities for more pleasing and practical audio setups."
          headphoneImage={earphone}
        />
      </section>
      <ShopProductsContainer />
      <BestAudioGear />
      <Footer />
    </>
  );
};

export default Earphones;
