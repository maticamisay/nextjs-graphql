import React from "react";
import Link from "next/link";
import useUser from "@/store/useUser";

const LoggedButtons = () => {
  const { user } = useUser();
  return (
    <>
      <div className="flex items-center">
        <span className="text-white mr-2">Hola, {user.name}</span>
        <Link
          href="/logout"
          className="text-white no-underline hover:underline hover:text-gray-200 ml-4"
        >
          Cerrar sesión
        </Link>
      </div>
    </>
  );
};

export default LoggedButtons;
