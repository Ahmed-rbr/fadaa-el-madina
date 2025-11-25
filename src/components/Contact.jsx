const Contact = () => {
  return (
    <section
      id="contact"
      className="flex bg-purple flex-col items-center p-2 md:p-6"
    >
      <h2 className="text-5xl text-center font-bold text-white">Contacts Us</h2>

      <form
        className="flex w-full md:w-3/5 flex-col gap-4 p-2 md:p-6"
        action="#"
      >
        <input
          className=" bg-white py-4 w-full px-6  focus:outline-none focus:border-blue  placeholder:text-black placeholder:bg-white"
          placeholder="mohamed ..."
          type="text"
          name="name"
          id=""
        />
        <input
          className="bg-white py-4 w-full px-6 focus:outline-none focus:border-blue placeholder:text-black"
          placeholder="0666666666"
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          name="number"
        />

        <textarea
          className=" bg-white py-4 w-full px-6  focus:outline-none focus:border-blue  placeholder:text-black placeholder:bg-white"
          name="msg"
          placeholder="enter your message"
          id=""
        ></textarea>
        <button
          className="text-white  py-3 text-2xl font-medium bg-green-500 rounded-2xl hover:cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>
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

export default Contact;
