import React from "react";
import ProductDescription from "./ProductDescription";

const AboutProduct = ({
  reverse,
  subheading,
  heading,
  content,
  headphoneImage,
}) => {
  return (
    <div
      className={`flex justify-between items-center mx-[165px] ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="w-[500px]">
        <img src={headphoneImage} alt="headphone" className="w-fit" />
      </div>
      <div className="w-[445px]">
        <ProductDescription
          subheading={subheading}
          heading={heading}
          content={content}
          btn_primary
          // color="black"
        />
      </div>
    </div>
  );
};

export default AboutProduct;
