import React from "react";
import Navbar from "../components/Navbar";
import AboutProduct from "../components/AboutProduct";

import headphon1 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import headphon2 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import headphon3 from "../assets/product-xx59-headphones/desktop/image-product.jpg";

import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";
import ShopProductsContainer from "../components/ShopProductsContainer";

const Headphones = () => {
  return (
    <>
      <header className="bg-black relative h-60">
        <Navbar />
        <h1 className="text-white uppercase text-center py-8 text-[40px] font-bold">
          Headphones
        </h1>
      </header>
      <section className="my-8">
        <AboutProduct
          subheading="New product"
          heading="XX99 Mark II Headphones"
          content="The new XX99 Mark II headphones is the pinnacle of pristine 
              audio. It redefines your premium headphone experience by reproducing 
             the balanced depth and precision of studio-quality sound."
          headphoneImage={headphon1}
        />

        <AboutProduct
          reverse
          heading="XX99 Mark I Headphones"
          content="As the gold standard for headphones, the classic XX99 
          Mark I offers detailed and accurate audio reproduction for audiophiles, 
          mixing engineers, and music aficionados alike in studios and on the go."
          headphoneImage={headphon2}
        />
        <AboutProduct
          heading="XX59 Headphones"
          content="Enjoy your audio almost anywhere and customize it 
          to your specific tastes with the XX59 headphones. The stylish yet durable 
          versatile wireless headset is a brilliant companion at home or on the move."
          headphoneImage={headphon3}
        />
      </section>

      <ShopProductsContainer />
      <BestAudioGear />
      <Footer />
    </>
  );
};

export default Headphones;
