import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "212667765166";
  const message = "";
  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <button
      className="bg-green-500  mt-8 font-medium animate-bounce text-white px-8 py-3 text-2xl rounded-xl"
      onClick={handleClick}
    >
      WhatsApp Us
    </button>
  );
};

export default WhatsAppButton;
