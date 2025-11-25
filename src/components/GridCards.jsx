import React from "react";
import Card from "./Card";

const GridCards = () => {
  return (
    <section
      id="programs"
      className="flex bg-purple   flex-col items-center gap-2"
    >
      <h2 className="text-white font-bold text-4xl">What We Offer</h2>
      <div className="grid lg:mt-4  gap-4 grid-cols-1  lg:grid-cols-2 ">
        <Card
          age={"4-6"}
          color={"pink"}
          title={"Qur’an Learning"}
          description={
            "A calm and nurturing environment where children learn recitation, memorization, and Tajwid with qualified teachers."
          }
          img={"/img3.webp"}
        />
        <Card
          age={"8-10"}
          title={"Robotique & Programmation"}
          description={
            "Hands-on workshops where kids build robots, learn programming logic, and discover the world of technology through fun projects."
          }
          color={"yellow"}
          img={"/img1.png"}
        />
        <Card
          age={"10-12"}
          title={"Calcul Mental"}
          description={
            "Boosting memory, concentration, and rapid problem-solving through engaging mental math techniques."
          }
          color={"orange"}
          img={"/img2.png"}
        />
        <Card
          age={"12-14"}
          title={"Cours de Soutien"}
          description={
            "Personalized support to help students improve in school, strengthen weak areas, and develop effective study skills."
          }
          color={"pink"}
          img={"/img4.png"}
        />
      </div>
    </section>
  );
};

export default GridCards;
