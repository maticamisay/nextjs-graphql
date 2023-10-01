"use client";
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-3">Lista de Todos</h2>
      <ul className="bg-white shadow rounded p-4 overflow-none">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
