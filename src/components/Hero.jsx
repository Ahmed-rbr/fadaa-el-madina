import React from "react";
import AppTemplate from "../templates/AppTemplate";
import WhatsAppButton from "./WhatsAppButton";
import GridCards from "./GridCards";

const Hero = () => {
  return (
    <AppTemplate>
      <section id="home" className="p-4 md:p-8">
        <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between  items-center">
          <div className="flex lg:w-6/12 items-baseline flex-col gap-4">
            <h1 className="lg:text-6xl text-3xl text-center md:text-left md:text-5xl tracking-wider font-bold text-white">
              Wake a Genius in a Child
            </h1>
            <h2 className="text-2xl text-center font-semibold text-white flex flex-wrap gap-2">
              Discover
              <span className="bg-pink/20 text-pink px-2 py-1 rounded-xl font-bold">
                robotics
              </span>
              <span className="bg-yellow/20 text-yellow px-2 py-1 rounded-xl font-bold">
                coding
              </span>
              <span className="bg-orange/20 text-orange px-2 py-1 rounded-xl font-bold">
                Quran learning
              </span>
              &
              <span className="bg-blue/20 text-blue px-2 py-1 rounded-xl font-bold">
                academic success
              </span>
            </h2>{" "}
            <div className="m-auto">
              {" "}
              <WhatsAppButton />
            </div>
          </div>
          <img
            className="rounded-3xl lg:w-6/12"
            src="/img_hero.jpg"
            alt="happy  kids"
          />
        </div>
      </section>
    </AppTemplate>
  );
};

export default Hero;
