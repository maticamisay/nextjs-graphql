"use client";
import useAccessControl from "@/hooks/useAccessControl";
import { DecisionType, Role } from "@/lib/constants";
import { useState } from "react";

const TipForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const access = useAccessControl(Role.ADMIN);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    setTitle("");
    setDescription("");
  };

  if (access === DecisionType.DENY) {
    return (
      <p className="text-red-500 text-center">
        No tienes permiso para crear tips
      </p>
    );
  }
  return (
    <div className="mb-4 px-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Crear Tip del Día</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-start sm:items-center border rounded shadow-sm"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del tip"
          className="flex-grow p-3 w-full sm:w-auto outline-none border-b sm:border-b-0 sm:border-r"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción del tip"
          className="flex-grow p-3 w-full sm:w-auto outline-none border-b sm:border-b-0 sm:border-r"
        />
        <button
          type="submit"
          className="mt-2 w-full sm:w-auto sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 px-4 transition duration-300 ease-in-out disabled:opacity-50"
          disabled={title.trim() === "" || description.trim() === ""}
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default TipForm;
