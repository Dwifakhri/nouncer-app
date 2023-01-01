import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto">
      <nav className="w-full h-20 bg-gray-800 text-center flex items-center justify-center top-0 sticky z-10 ">
        <a>
          {" "}
          <span className="text-4xl font-bold text-cyan-400 italic h-20 text-center md:px-3 px-3">
            Nouncer
          </span>
        </a>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
