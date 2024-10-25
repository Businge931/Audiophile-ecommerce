import React from "react";
import bestGear from "../assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";

const BestAudioGear = () => {
  return (
    <section className="flex justify-between my-20 items-center mx-[165px] md:flex-col-reverse md:mx-[40px]">
      <div className="w-[445px] md:w-full md:text-center">
        <h4 className="font-bold uppercase text-5xl pb-4">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h4>
        <p className="opacity-50 font-[500] text-[15px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="overflow-hidden">
        <img
          src={bestGear}
          alt="best gear"
          className="h-full w-fit md:hidden"
        />
        <img src={bestGearTablet} alt="best gear" className="h-[300px] w-fit" />
      </div>
    </section>
  );
};

export default BestAudioGear;
