import WhatsAppButton from "./WhatsAppButton";

const Qst = () => {
  return (
    <section className="bg-purple  items-center  text-white p-6 flex flex-col gap-4 ">
      <h2 className="text-4xl font-medium ">
        Do you have any other questions?
      </h2>{" "}
      <div className="my-4">
        <img className="rounded" src="qst.webp" alt="qst" />
      </div>
      <p className="font-medium tracking-wide leading-snug">
        If you have more questions , we're here to help. Don't hesitate to
        contact us directly - we'll be happy to answer all your inquiries.
      </p>
      <WhatsAppButton />
      <div className="w-full h-64 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.123456789!2d-8.5!3d33.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6f123456789%3A0xabcdef123456!2sEl%20Jadida%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Qst;
