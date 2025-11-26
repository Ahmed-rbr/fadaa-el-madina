import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaCopyright,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 justify-between lg:flex-row flex-col">
          {/* Address Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <p className="font-bold text-2xl">Address</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=24000+El+Jadida,+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 flex items-center gap-2 ml-4"
            >
              24000 El Jadida, Morocco
            </a>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-600 rounded-lg">
                <FaPhone className="text-xl" />
              </div>
              <p className="font-bold text-2xl">Contacts</p>
            </div>
            <div className="flex flex-col gap-3 ml-4">
              <a
                href="tel:0667765166"
                className=" text-white px-4 py-3 rounded-lg hover:underline transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                <FaPhone />
                Call Us 0667765166
              </a>
              <a
                href="https://wa.me/212667765166"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white px-4 py-3 rounded-lg hover:underline transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp 0667765166
              </a>
              <a
                href="mailto:almaouhibafadaa@gmail.com"
                className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 flex items-center gap-2 ml-4 mb-4"
              >
                <FaEnvelope />
                almaouhibafadaa@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <p className="font-bold text-2xl">Social Media</p>
            </div>

            <div className="flex gap-3 ml-4">
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-lg hover:bg-blue-400 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-center flex items-center justify-center gap-2">
            <FaCopyright />
            {new Date().getFullYear()} Fadaa Al Maouhiba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
