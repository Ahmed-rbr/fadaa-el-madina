import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 text-white">
      <div className="flex gap-5 justify-between md:flex-row flex-col">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl">Address</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=24000+El+Jadida,+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            24000 El Jadida, Morocco
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl">Contacts</p>
          <div className="flex flex-col md:flex-row gap-3">
            {" "}
            <a
              href="tel:0667765166"
              className="bg-blue text-white px-5 py-3 rounded-xl hover:bg-blue/80"
            >
              Call Us 0667765166
            </a>
            <a
              href="https://wa.me/212667765166"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-5 py-3 rounded-xl hover:bg-green-600"
            >
              WhatsApp 0667765166
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-4xl">Email</p>
          <a
            href="mailto:almaouhibafadaa@gmail.com"
            className="text-white-600 hover:underline"
          >
            almaouhibafadaa@gmail.com
          </a>
        </div>
      </div>
      <p className="text-white mt-4  text-center">
        &copy; {new Date().getFullYear()} Fadaa Al Maouhiba. All rights
        reserved.
      </p>{" "}
    </footer>
  );
};

export default Footer;
