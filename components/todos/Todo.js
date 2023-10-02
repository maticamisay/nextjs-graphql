import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { SlOptions } from "react-icons/sl";
import useEditTodo from "@/store/useEditTodo";
import { getToken, revalidatePathServer } from "@/app/actions";
import useUser from "@/store/useUser";
import { Role } from "@/lib/constants";
import { toast } from "react-toastify";

const Todo = ({ todo }) => {
  const { setTodo } = useEditTodo();
  const { user } = useUser();

  const handleComplete = async () => {
    try {
      const token = await getToken();
      const res = await fetch(`/api/todos`, {
        method: "PUT",
        body: JSON.stringify({
          id: todo.id,
          completed: !todo.completed,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok || data.name === "ApolloError") {
        throw new Error("Error al completar el todo");
      }
      revalidatePathServer("/");
      toast.success("Todo completado con éxito");
    } catch (error) {
      console.log(error);
      toast.error("Error al completar el todo");
    }
  };

  const handleDelete = async () => {
    try {
      const token = await getToken();
      const res = await fetch(`/api/todos`, {
        method: "DELETE",
        body: JSON.stringify({
          id: todo.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok || data.name === "ApolloError") {
        throw new Error("Error al completar el todo");
      }
      toast.success("Todo eliminado con éxito");
      revalidatePathServer("/");
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar el todo");
    }
  };
  const renderButton = todo.completed;
  const renderDropdown =
    user.name === todo.userId.name || user.role === Role.ADMIN;
  return (
    <li className="relative border-b last:border-b-0 p-4 flex justify-between items-center hover:bg-gray-50 transition duration-300">
      <div>
        <p className="font-semibold mb-1">{todo.title}</p>
        <small className="text-gray-600">Creado por: {todo.userId.name}</small>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            todo.completed
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {todo.completed ? "Completado" : "Pendiente"}
        </span>

        {renderDropdown ? (
          <Dropdown icon={<SlOptions />}>
            {!renderButton && (
              <button
                className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md"
                onClick={handleComplete}
              >
                Completar
              </button>
            )}
            {!renderButton && (
              <button
                className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md"
                onClick={() =>
                  setTodo({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                    userId: todo.userId.id,
                  })
                }
              >
                Editar
              </button>
            )}
            <button
              className="text-left text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </Dropdown>
        ) : null}
      </div>
    </li>
  );
};

export default Todo;
