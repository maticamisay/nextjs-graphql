"use client";
import { revalidatePathServer } from "@/app/actions";
import useEditTodo from "@/store/useEditTodo";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TodoForm({ users = [] }) {
  const [title, setTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const { todo, clearTodo } = useEditTodo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/todos", {
        method: todo ? "PUT" : "POST",
        body: JSON.stringify({
          id: todo ? todo.id : null,
          title,
          userId: selectedUser,
          completed: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      todo && clearTodo();
      setTitle("");
      setSelectedUser("");
      revalidatePathServer("/");
      if (!res.ok) {
        throw new Error(`Error al ${todo ? "actualizar" : "crear"} el todo`);
      }
      toast.success(`Todo ${todo ? "actualizado" : "creado"} correctamente`);
    } catch (error) {
      console.log(error);
      toast.error(`Error al ${todo ? "actualizar" : "crear"} el todo`);
    }
  };

  useEffect(() => {
    console.log(todo);
    if (todo) {
      setTitle(todo.title);
      setSelectedUser(todo.userId);
    } else {
      setTitle("");
      setSelectedUser("");
    }
  }, [todo]);
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-3">Crear Todo</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border rounded shadow-sm overflow-hidden"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Añade un nuevo todo"
          className="flex-grow p-2 outline-none"
        />
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="p-2 border-l"
        >
          <option value="" disabled>
            Selecciona un usuario
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 px-4 transition duration-300 ease-in-out disabled:opacity-50"
          disabled={title.trim() === "" || selectedUser === ""}
        >
          {todo ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
