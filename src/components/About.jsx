import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="grid items-center gap-4 p-4 bg-purple grid-cols-1 lg:grid-cols-2"
    >
      <div>
        <img
          className="bg-transparent"
          loading="lazy"
          src="/h2.png"
          alt="kids"
        />
      </div>
      <div className="flex gap-6  text-white flex-col">
        <span className="text-white">About Us ____</span>

        <h1 className="text-3xl md:text-5xl font-bold text-white">
          First Steps Toward Big Dreams
        </h1>
        <div className="flex flex-col gap-4">
          <p className="tracking-wide leading-relaxed">
            At Fadaa Al Maouhiba , we believe that every child carries a spark
            of talent waiting to shine. Our center provides a warm, inspiring
            environment where children can explore robotics, coding, Qur’an
            learning, creativity, and academic success — all in one place.
          </p>

          <p className="tracking-wide leading-relaxed">
            We offer unique, modern programs designed to build confidence,
            curiosity, and strong learning habits. From mastering technology to
            strengthening values and academic foundations, every activity is
            crafted to help children grow with purpose.
          </p>
        </div>
        <span className="text-white">____ About Us</span>
      </div>
    </section>
  );
};

export default About;
