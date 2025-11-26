import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const WhyUs = () => {
  return (
    <section className="bg-purple p-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between">
        <div className="">
          {" "}
          <img className="rounded w-full" src="/join.jpg" alt="kids" />
        </div>
        <div className="flex text-white md:p-6 p-3  flex-col gap-6">
          <p className="font-medium text-yellow">Why chose Fadaa El Madina?</p>
          <h2 className="text-5xl tracking-wide  font-bold leading-normal">
            Discover the future in the hands of our brilliant young minds!
          </h2>
          <p className="text-gray-200 text-2xl tracking-wide leading-relaxed">
            Here's what makes us the perfect choice for learning robotics,
            coding, electronics, and 3D design.
          </p>
          <ul className="flex flex-col gap-4 border-b p-3 border-white">
            <li className="flex font-bold text-2xl items-center gap-2">
              {" "}
              <FaArrowRight className="bg-yellow rounded-full p-1 " />
              Student-Focused Teaching Methodology
            </li>
            <li className="flex font-bold text-2xl items-center gap-2">
              <FaArrowRight className="bg-yellow rounded-full p-1 " />
              STEM Competency Building
            </li>
            <li className="flex font-bold text-2xl items-center gap-2">
              <FaArrowRight className="bg-yellow rounded-full p-1 " />
              Practical Hands-On Experience
            </li>
            <li className="flex font-bold text-2xl items-center gap-2">
              {" "}
              <FaArrowRight className="bg-yellow rounded-full p-1 " />
              Qualified Instructors
            </li>
          </ul>
          <p>Join CMRIA for an exciting and enriching learning experience!</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
