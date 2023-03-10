import React from 'react'
import { products } from '@/constants/ProductInfo/products'
import { CarouselCard } from '@/components/Product';


const CarouselCardList = () => {
  return (
    <React.Fragment>
      {products.map((product, index) => {
        return (
          <div
            className="pb-[clamp(91px,25.278vw,129px)] pad:pb-[clamp(120px,11.111vw,144px)] desktop:pb-[clamp(116px,6.042vw,139.2px)]"
            key={`Product${index}`}
          >
            <CarouselCard {...product} />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CarouselCardList