import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex w-full md:w-auto justify-center md:justify-start text-white font-extrabold text-2xl">
          <Link
            href="/"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            🌟 TO DO&apos;s con GraphQL
          </Link>
        </div>

        <div className="hidden md:flex md:items-center">
          <Link
            href="/login"
            className="text-white no-underline hover:underline hover:text-gray-200 ml-4"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
