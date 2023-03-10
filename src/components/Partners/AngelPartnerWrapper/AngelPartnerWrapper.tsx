import React from 'react'

type Props = {
  boxStyle: string;
  innerStyle: string;
  src: string;
  name: string;
};

const AngelPartnerWrapper = (props: Props) => {
  return (
    <div
      className={`flex flex-col items-center ${props.boxStyle}`}
    >
      <img
        className={`${props.innerStyle}`}
        src={props.src}
        alt="Partners"
        loading="lazy"
      />
      <h4 className="whitespace-pre-wrap">{props.name}</h4>
    </div>
  );
}

export default AngelPartnerWrapper