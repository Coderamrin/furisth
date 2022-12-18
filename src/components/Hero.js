import React from "react";
import heroImg from "../assets/Marketing-bro.png";

const Hero = () => {
  return (
    <section className="hero bg-blue-700 text-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-between py-20 md:py-5">
        <div className="hero-info pr-4 pt-10 px-5">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5">
            The Marketing Agency You Need
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            deserunt enim? Neque, atque, amet nemo aperiam autem recusandae
            nesciunt alias modi veritatis dignissimos blanditiis, fugiat
            reprehenderit! Ea officiis aut error.
          </p>
          <a
            href="/about"
            className="px-8 py-5 bg-gray-800 rounded-md text-xl border-2 border-gray-800 hover:bg-blue-700 hover:text-gray-800"
          >
            Learn More
          </a>
        </div>

        <div className="hero-image p-10">
          <img src={heroImg} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
