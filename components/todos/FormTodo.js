"use client";
import { getToken, revalidatePathServer } from "@/app/actions";
import useEditTodo from "@/store/useEditTodo";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { todo, clearTodo } = useEditTodo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/todos", {
        method: todo ? "PUT" : "POST",
        body: JSON.stringify({
          id: todo ? todo.id : null,
          title,
          completed: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      todo && clearTodo();
      setTitle("");
      revalidatePathServer("/");
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast.success(`Todo ${todo ? "actualizado" : "creado"} correctamente`);
    } catch (error) {
      console.log(error);
      toast.error(`Error al ${todo ? "actualizar" : "crear"} el todo`);
    }
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    } else {
      setTitle("");
    }
    getToken().then((token) => console.log(token));
  }, [todo]);
  return (
    <div className="mb-4 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Crear Todo</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-start sm:items-center border rounded shadow-sm"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Añade un nuevo todo"
          className="flex-grow p-3 w-full sm:w-auto outline-none border-b sm:border-b-0 sm:border-r"
        />
        <button
          type="submit"
          className="mt-2 w-full sm:w-auto sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 px-4 transition duration-300 ease-in-out disabled:opacity-50"
          disabled={title.trim() === ""}
        >
          {todo ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
