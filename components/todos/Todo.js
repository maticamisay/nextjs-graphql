import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { SlOptions } from "react-icons/sl";
import useEditTodo from "@/store/useEditTodo";
import { revalidatePathServer } from "@/app/actions";

const Todo = ({ todo }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { setTodo } = useEditTodo();

  const handleComplete = async () => {
    await fetch(`/api/todos`, {
      method: "PUT",
      body: JSON.stringify({
        id: todo.id,
        completed: !todo.completed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePathServer("/");
  };

  const handleDelete = async () => {
    await fetch(`/api/todos`, {
      method: "DELETE",
      body: JSON.stringify({
        id: todo.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePathServer("/");
  };
  const renderButton = todo.completed;
  return (
    <li className="relative border-b last:border-b-0 p-2 flex justify-between items-center">
      <div>
        <p className="font-medium">{todo.title}</p>
        <small className="text-gray-500">Creado por: {todo.userId.name}</small>
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
        {showMenu && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <li className="border-b last:border-b-0">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                Editar
              </button>
            </li>
            <li className="border-b last:border-b-0">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                Otra Acción
              </button>
            </li>
            <li>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                Eliminar
              </button>
            </li>
          </ul>
        )}
      </div>
    </li>
  );
};

export default Todo;
