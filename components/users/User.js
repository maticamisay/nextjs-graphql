"use client";
import React from "react";
import { toast } from "react-toastify";

const User = ({ user }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }

      toast.success("Usuario eliminado con éxito");
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el usuario");
    }
  };

  return (
    <li className="border-b last:border-b-0 p-2 flex justify-between items-center">
      <div>
        <p className="font-medium">{user.name}</p>
        <small className="text-gray-500">Todos: {user.todosCount}</small>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-600 hover:bg-red-700 text-white p-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Eliminar
      </button>
    </li>
  );
};

export default User;
