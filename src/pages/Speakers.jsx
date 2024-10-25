import React from "react";
import Navbar from "../components/Navbar";
import AboutProduct from "../components/AboutProduct";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";
import ShopProductsContainer from "../components/ShopProductsContainer";

import speaker1 from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import speaker2 from "../assets/product-zx7-speaker/desktop/image-product.jpg";

const Speakers = () => {
  return (
    <>
      <header className="bg-black relative h-60">
        <Navbar />
        <h1 className="text-white uppercase text-center py-8 text-[40px] font-bold">
          Speakers
        </h1>
      </header>
      <section className="my-8">
        <AboutProduct
          subheading="New product"
          heading="ZX9 SPEAKER"
          content="Upgrade your sound system with the all new ZX9 active speaker. It’s a 
          bookshelf speaker system that offers truly wireless connectivity -- 
          creating new possibilities for more pleasing and practical audio setups."
          headphoneImage={speaker1}
        />

        <AboutProduct
          reverse
          heading="ZX7 SPEAKER"
          content="Stream high quality sound wirelessly with minimal loss. The ZX7 
          bookshelf speaker uses high-end audiophile components that represents the top of 
          the line powered speakers for home or studio use."
          headphoneImage={speaker2}
        />
      </section>
      <ShopProductsContainer />
      <BestAudioGear />
      <Footer />
    </>
  );
};

export default Speakers;
