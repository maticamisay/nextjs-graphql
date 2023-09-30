"use client";
import { revalidatePathServer } from "@/app/actions";
import React, { useState } from "react";
import { toast } from "react-toastify";

function UserForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setName("");
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
      <h2 className="text-xl font-bold mb-3">Crear Usuario</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border rounded shadow-sm overflow-hidden"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del usuario"
          className="flex-grow p-2 outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white p-2 px-4 transition duration-300 ease-in-out disabled:opacity-50"
          disabled={name.trim() === ""}
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default UserForm;
