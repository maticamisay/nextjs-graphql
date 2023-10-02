import React from "react";
import useUser from "@/store/useUser";
import { clearToken } from "@/app/actions";

const LoggedButtons = () => {
  const { user, clearUser } = useUser();

  const handleLogout = () => {
    clearUser();
    clearToken();
  };
  return (
    <>
      <div className="flex items-center">
        <span className="text-white mr-2">Hola, {user.name}</span>
        <button
          className="text-white no-underline hover:underline hover:text-gray-200 ml-4"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </>
  );
};

export default LoggedButtons;
