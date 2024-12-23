import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex items-center justify-between bg-[#F8F3E7] px-8 py-4 shadow-lg border-b-2 border-gray-200">
      <div className="text-3xl font-serif text-[#33643F] tracking-widest">AMRUTAM</div>
      <div className="flex space-x-6 text-[#33643F] text-lg font-medium">
        <Link
          to="/"
          className={`${
            activeLink === "/" ? "font-bold text-green-700" : "hover:text-green-700"
          } transition duration-300 ease-in-out`}
          onClick={() => handleClick("/")}
        >
          Home
        </Link>
        <Link
          to="/find-doctors"
          className={`${
            activeLink === "/find-doctors" ? "font-bold text-green-700" : "hover:text-green-700"
          } transition duration-300 ease-in-out`}
          onClick={() => handleClick("/find-doctors")}
        >
          Find Doctors
        </Link>
        <Link
          to="/about-us"
          className={`${
            activeLink === "/about-us" ? "font-bold text-green-700" : "hover:text-green-700"
          } transition duration-300 ease-in-out`}
          onClick={() => handleClick("/about-us")}
        >
          About Us
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-100 transition duration-300 ease-in-out">
          Login
        </button>
        <button className="px-4 py-2 bg-[#33643F] text-white rounded hover:bg-green-800 transition duration-300 ease-in-out">
          Sign-up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
