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
    </section>
  );
};

export default Contact;
