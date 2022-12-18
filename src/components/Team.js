import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

const Team = () => {
  const teamData = [
    {
      img: team1,
      name: "Jhon Doe",
      title: "Senior Developer",
    },
    {
      img: team2,
      name: "Will James",
      title: "Senior Developer",
    },
    {
      img: team3,
      name: "Allice Jones",
      title: "Senior Developer",
    },
    {
      img: team4,
      name: "Amrin Akther",
      title: "Senior Developer",
    },
    {
      img: team5,
      name: "Kate Bishop",
      title: "Senior Developer",
    },
    {
      img: team6,
      name: "Abdullah Ibn Umar (Ra)",
      title: "Senior Developer",
    },
  ];

  return (
    <section className="bg-gray-800" id="team">
      <div className="container mx-auto py-20">
        <h2 className="text-3xl text-center text-white font-bold mb-16">
          Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
          {teamData.map((team, i) => {
            return (
              <div key={i} className="text-center mb-10 text-white">
                <img src={team.img} alt={team.title} className="mx-auto mb-5" />
                <p className="text-lg">{team.name}</p>
                <p className="text-gray-500">{team.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
