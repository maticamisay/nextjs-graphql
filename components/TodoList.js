"use client";
import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-3">Lista de Todos</h2>
      <ul className="bg-white shadow rounded p-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="border-b last:border-b-0 p-2 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{todo.title}</p>
              <small className="text-gray-500">
                Creado por: {todo.userId.name}
              </small>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                todo.completed
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {todo.completed ? "Completado" : "Pendiente"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
