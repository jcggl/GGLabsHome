import React from "react";
import {
  CarouselCardList,
  ProductDescription,
  ProductHeader,
} from "@/components/Product";

const Product = () => {
  return (
    <section className="mx-auto pad:w-[clamp(844px,78.148vw,1228px)] desktop:w-[clamp(1228px,63.958vw,1473.6px)] pt-[clamp(95px,26.389vw,120px)] pad:pt-[clamp(130px,12.037vw,175px)] desktop:pt-[clamp(186px,9.688vw,223.2px)] pb-[clamp(92.49px,25.692vw,120px)] pad:pb-[clamp(23px,2.130vw,58px)] desktop:pb-[clamp(58px,3.021vw,69.6px)]">
      <ProductHeader />
      <ProductDescription />
      <CarouselCardList />
    </section>
  );
};

export default Product;
