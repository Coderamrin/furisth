import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-800 py-20" id="contact">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-white text-3xl font-bold py-5">Contact Us</h2>
          <p className="text-gray-400 text-md mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            tempora explicabo accusantium, harum modi culpa nesciunt nemo esse
            sed architecto quae similique est maxime, temporibus magnam aliquam
            libero amet ullam?
          </p>

          <p className="text-gray-400 text-md mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            reprehenderit deleniti molestias facere, non aperiam. Velit,
            similique deleniti ipsam tempora repellendus rem nesciunt provident
            facere. Ducimus eveniet dignissimos accusantium. Quo.
          </p>

          <ul className="text-gray-400">
            <ol> 1 accusantium. Quo.</ol>
            <ol> 2 non aperiam. Velit,.</ol>
            <ol> 3 em nesciunt provident</ol>
            <ol> 4 adipisicing elit. Nesciunt</ol>
          </ul>
        </div>

        <div>
          <form action="" className="flex flex-col">
            <input
              type="text"
              placeholder="name"
              required
              className="px-4 py-4 text-lg"
            />
            <input
              type="email"
              placeholder="email"
              required
              className="my-5 px-4 py-4 text-lg"
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="px-4 py-4 text-lg"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-4 my-4 hover:bg-transparent rounded-md text-xl border-2 border-blue-700 bg-blue-700 text-white hover:text-blue-700"
            >
              Learn More
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
