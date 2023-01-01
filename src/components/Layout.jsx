import React from "react";
import { AiFillStar, AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto">
      <nav className="w-full h-20 bg-gray-800 text-center flex items-center justify-center top-0 sticky z-10 ">
        <div className="text-white">
          <BsSearch size={30} />
        </div>
        <p className="text-4xl font-bold text-cyan-400 italic h-20 text-center flex items-center justify-center md:px-3 px-3">
          Nouncer
        </p>
      </nav>
      <div className="my-5 flex justify-center items-center space-x-5 ">
        <Link className="hover:text-blue-500" to="/">
          <AiFillHome className="cursor-pointer " size={25} />
        </Link>
        <Link className="hover:text-blue-500" to="/favorites">
          <AiFillStar className="cursor-pointer" size={25} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
