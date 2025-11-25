import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const DEcount = () => {
  return (
    <section className="bg-purple p-8 items-center text-white flex flex-col gap-2 bg-no-repeat bg-center">
      <h2 className="font-bold text-4xl md:w-3/5 text-center md:text-5xl text-4xl">
        Get a 10% discount on the new program
      </h2>
      <WhatsAppButton />
    </section>
  );
};

export default DEcount;
