"use client";
import { revalidatePathServer } from "@/app/actions";
import React, { useState } from "react";
import { toast } from "react-toastify";

function UserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setName("");
      setPassword("");
      if (!res.ok) {
        throw new Error("Error al crear el usuario");
      }
      toast.success(`Usuario creado correctamente`);
      revalidatePathServer("/usuarios");
    } catch (error) {
      console.log(error);
      toast.error(`Error al crear el usuario`);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Crear Usuario</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-stretch border rounded-lg shadow-sm p-4 gap-4"
      >
        <div className="flex-1 flex flex-col">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre del usuario:
          </label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50"
            disabled={name.trim() === "" || password.trim() === ""}
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
