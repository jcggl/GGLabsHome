import React from 'react'
import useResize from '@/hooks/useResize';


const ProductDescription = () => {
  const { width } = useResize()
  return (
    <h4 className="mx-auto text-center text-black w-[clamp(283px,78.611vw,424.4px)] pad:w-[clamp(844px,78.148vw,1228px)] desktop:w-auto pt-[clamp(49px,13.611vw,60px)] pad:pt-[clamp(73px,6.759vw,100px)] desktop:pt-[clamp(40px,2.083vw,48px)] pb-[clamp(72px,20vw,85px)] pad:pb-[clamp(130px,12.037vw,160px)] desktop:pb-[clamp(75px,3.906vw,90px)] text-[clamp(12px,3.333vw,18px)] pad:text-[clamp(18px,1.667vw,20px)] desktop:text-[clamp(20px,1.042vw,24px)] leading-[150%] pad:leading-[155%] desktop:leading-[160%]">
      At GoodGang Labs, we are committed to offering innovative solutions to
      establish{width >= 1080 ? <br /> : <span>&nbsp;</span>}a new avatar
      standard for how people represent themselves on the metaverse.
    </h4>
  );
}

export default ProductDescription