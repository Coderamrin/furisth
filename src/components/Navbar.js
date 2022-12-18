import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div
      className={
        scroll
          ? "header md:bg-gray-800 bg-gray-800"
          : "header md:bg-transparent bg-gray-800"
      }
    >
      <a href="/" className="logo text-3xl font-bold py-2">
        Furisth
      </a>

      {/* Desktop nav links */}
      <nav className="nav-desktop hidden md:block">
        <ul className="flex">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>

      {/* Mobile nav links */}
      <nav
        className={!toggle ? "nav-mobile left-[-100%]" : "nav-mobile left-0"}
      >
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>More</li>
        </ul>
      </nav>

      {/* toggler */}

      <div className="toggler block md:hidden" onClick={handleToggle}>
        {!toggle ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
