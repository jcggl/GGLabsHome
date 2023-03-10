import React from 'react'

type Props = {
  boxStyle: string;
  style: string;
  src: string;
}

const PartnerWrapper = (props: Props) => {
  return (
    <div className={`flex justify-center items-center aspect-[300/160] ${props.boxStyle}`}>
      <img
        className={`${props.style}`}
        src={props.src}
        alt="Partners"
        loading="lazy"
      />
    </div>
  );
}

export default PartnerWrapper