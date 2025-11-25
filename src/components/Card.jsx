import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Card = ({ img, title, description, color, age }) => {
  return (
    <div className="flex p-6 items-baseline overflow-hidden relative flex-col rounded-2xl">
      <img src={img} alt="img of programmes" loading="lazy" />
      <div
        className={`bg-${color}  rounded-b-2xl flex items-baseline p-6 text-white flex-col gap-4 `}
      >
        <h2 className="text-3xl font-bold tracking-wide">{title}</h2>
        <p className="tracking-wide">{description}</p>
        <WhatsAppButton />
      </div>
      <span className="p-4 font-bold rounded-l-full text-white bg-pink absolute top-6 right-6">
        {age} years
      </span>
    </div>
  );
};

export default Card;
