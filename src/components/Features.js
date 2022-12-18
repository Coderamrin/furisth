import React from "react";
import {
  AiFillAccountBook,
  AiOutlineAppstore,
  AiOutlineNotification,
  AiFillBackward,
  AiOutlineArrowRight,
} from "react-icons/ai";

import featuredImgOne from "../assets/Mobile-Marketing-pana.svg";
import featuredImgTwo from "../assets/Blog-post-amico.png";

const Features = () => {
  const cardData = [
    {
      icon: <AiFillAccountBook size={50} color="rgb(131, 143, 170)" />,
      title: "video marketing",
      description:
        "Phasellus euismod nisi velit, ac varius ligula varius a. Aliquam erat volutpat. Curabitur faucibus dolor dui",
    },
    {
      icon: <AiOutlineAppstore size={50} color="rgb(131, 143, 170)" />,
      title: "Marketing Strategy",
      description:
        "Phasellus euismod nisi velit, ac varius ligula varius a. Aliquam erat volutpat. Curabitur faucibus dolor dui",
    },
    {
      icon: <AiOutlineNotification size={50} color="rgb(131, 143, 170)" />,
      title: "Promoting to people",
      description:
        "Phasellus euismod nisi velit, ac varius ligula varius a. Aliquam erat volutpat. Curabitur faucibus dolor dui",
    },
    {
      icon: <AiFillBackward size={50} color="rgb(131, 143, 170)" />,
      title: "Social media marketing",
      description:
        "Phasellus euismod nisi velit, ac varius ligula varius a. Aliquam erat volutpat. Curabitur faucibus dolor dui",
    },
  ];

  return (
    <section className="features py-20 bg-gray-900 text-white" id="features">
      <div className="container mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Grow your business twice faster than before
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {cardData.map((card, i) => {
            return (
              <div key={i} className="bg-gray-800 px-5 py-10 flex flex-col">
                <div className="icon">{card.icon}</div>
                <h5 className="py-4 text-xl font-bold">{card.title}</h5>
                <p className="text-gray-400">{card.description}</p>
                <a href="/contact" className="mt-auto">
                  {" "}
                  <AiOutlineArrowRight size={30} />{" "}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center justify-between">
          <div>
            <p className="text-blue-600">Next Level</p>
            <h3 className="text-3xl">Grow Your Business Now!</h3>
            <p className="text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet, rerum excepturi dolor velit ipsam neque, officiis odio
              doloribus fugiat tempore totam, illum unde expedita aspernatur
              quae modi aperiam voluptatum!
            </p>

            <button className="py-4 px-10 bg-blue-600 border-2 border-blue-600 rounded-md hover:bg-transparent hover:text-blue-600">
              Explore!
            </button>
          </div>

          <div className="w-[80%] ml-auto">
            <img src={featuredImgOne} alt="Mobile marketing illustration" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center justify-between">
          <div className="w-[80%] mr-auto">
            <img src={featuredImgTwo} alt="Seo illustration" />
          </div>

          <div>
            <p className="text-blue-600">Grow With SEO</p>
            <h3 className="text-3xl">Take Your on the first page of Google</h3>
            <p className="text-gray-500 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet, rerum excepturi dolor velit ipsam neque, officiis odio
              doloribus fugiat tempore totam, illum unde expedita aspernatur
              quae modi aperiam voluptatum!
            </p>

            <button className="py-4 px-10 bg-blue-600 border-2 border-blue-600 rounded-md hover:bg-transparent hover:text-blue-600">
              Explore!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
