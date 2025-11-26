import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Qst = () => {
  return (
    <section className="bg-purple text-white p-6 flex flex-col gap-4 ">
      <img src="qst.webp" alt="qst" />

      <h2 className="text-4xl font-medium text-yellow">
        Do you have any other questions?
      </h2>

      <p className="font-medium tracking-wide leading-snug">
        If you have more questions , we're here to help. Don't hesitate to
        contact us directly - we'll be happy to answer all your inquiries.
      </p>
      <WhatsAppButton />
    </section>
  );
};

export default Qst;
