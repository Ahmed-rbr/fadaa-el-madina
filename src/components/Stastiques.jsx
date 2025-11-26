import React from "react";

const Stastiques = () => {
  return (
    <section className="bg-purple text-white">
      <div className="flex flex-col gap-4 md:p-8 p-4">
        <p className="text-yellow font-medium ">Statistics</p>
        <h2 className="font-bold text-3xl md:text-5xl ">
          Fadaa El Madina In Numbers
        </h2>
        <p className=" w-full p-4 md:w-4/5 text-[16px] leading-normal tracking-wide ">
          Time and again, multiple programs have successfully trained numerous
          kids, building their capabilities in innovative areas. These courses
          unlock new possibilities and mold the skilled professionals of
          tomorrow
        </p>

        <div className="flex gap-4 w-full md:w-4/5 items-baseline  md:items-center md:flex-row flex-col border-b p-2 md:p-6  justify-between">
          <p className="text-5xl font-bold bg-yellow p-2 rounded-full">80%</p>
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl md:text-3xl font-medium">
              80% of children return every year.{" "}
            </h3>
            <p>
              Our motivating environment encourages children to continue their
              Our motivating environment encourages children to continue their
              learning journey with us
            </p>
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-4/5 items-baseline  md:items-center md:flex-row flex-col border-b p-2 md:p-6  justify-between">
          <p className="text-5xl font-bold bg-yellow p-2 rounded-full">200+</p>
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl md:text-3xl font-medium">
              200+ Children trained at Fadaa El Madina .{" "}
            </h3>
            <p>
              Hundreds of children have taken our courses, exploring robotics,
              programming, and 3D design, and have acquired skills that will
              stay with them throughout their lives.
            </p>
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-4/5 items-baseline  md:items-center md:flex-row flex-col border-b p-2 md:p-6  justify-between">
          <p className="text-5xl font-bold bg-yellow p-2 rounded-full">10+</p>
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl md:text-3xl font-medium">
              8+ Years of Experience
            </h3>
            <p>
              Companies and schools have collaborated with Fadaa El Madina to
              provide learning opportunities in robotics and artificial
              intelligence. These partnerships have enabled the creation of
              innovative programs and the training of tomorrow's leaders.
            </p>
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-4/5 items-baseline  md:items-center md:flex-row flex-col border-b p-2 md:p-6  justify-between">
          <p className="text-5xl font-bold bg-yellow p-2 rounded-full">100%</p>
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl md:text-3xl font-medium">
              100% Positive Parent Feedback{" "}
            </h3>
            <p>
              Parents consistently praise our robotics and AI programs,
              emphasizing the remarkable improvement in their children's
              abilities and enthusiasm for learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stastiques;
