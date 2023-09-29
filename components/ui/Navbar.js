import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a
            href="#"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            🌟 Mi Proyecto con Graphql
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
