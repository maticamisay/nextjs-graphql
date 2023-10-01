import Link from "next/link";
import React from "react";
import NavbarSession from "../session";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between">
        <div className="flex w-full md:w-auto justify-center md:justify-start text-white font-extrabold text-2xl">
          <Link
            href="/"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            🌟 TO DO&apos;s con GraphQL
          </Link>
        </div>

        <div className="flex items-center">
          <NavbarSession />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
