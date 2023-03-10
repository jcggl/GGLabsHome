import useResize from '@/hooks/useResize';
import React from 'react'

const PartnersDescription = () => {
  const {width} = useResize();

  return (
    <h4 className="flex justify-center items-center mx-auto text-center text-black mt-[clamp(60px,16.667vw,90px)] pad:mt-[clamp(24px,2.222vw,35px)] desktop:mt-[clamp(35px,1.823vw,100vw)] text-[clamp(12px,3.333vw,20px)] pad:text-[clamp(20px,1.852vw,30px)] desktop:text-[clamp(30px,1.563vw,100vw)] leading-[150%] pad:leading-[155%] desktop:leading-[160%]">
      Our investors believe in our values and vision.
    </h4>
  );
}

export default PartnersDescription