"use client";
import { revalidatePathServer } from "@/app/actions";
import { Role } from "@/lib/constants";
import useUser from "@/store/useUser";
import React from "react";
import { toast } from "react-toastify";

const User = ({ user }) => {
  const { user: userLogged } = useUser();
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/users`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }
      revalidatePathServer("/usuarios");
      revalidatePathServer("/");
      toast.success("Usuario eliminado con éxito");
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el usuario");
    }
  };
  const canRender =
    userLogged.name === user.name || userLogged.role === Role.ADMIN;
  return (
    <li className="border-b last:border-b-0 p-4 flex justify-between items-center hover:bg-gray-50 transition duration-300">
      <div>
        <p className="font-semibold mb-1">{user.name}</p>
        <small className="text-gray-600 block mb-1">
          Todos: {user.todosCount}
        </small>
        <small className="text-gray-500">Rol: {user.role}</small>
      </div>
      {canRender ? (
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Eliminar
        </button>
      ) : null}
    </li>
  );
};

export default User;
