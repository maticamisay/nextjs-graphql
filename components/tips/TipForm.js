"use client";
import { getToken, revalidatePathServer } from "@/app/actions";
import useAccessControl from "@/hooks/useAccessControl";
import { DecisionType, Role } from "@/lib/constants";
import { useState } from "react";
import { toast } from "react-toastify";

const TipForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const access = useAccessControl(Role.ADMIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const res = await fetch("/api/tipofday", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok || data.name === "ApolloError") {
        throw new Error(data.error);
      }
      toast.success(`Tip creado correctamente`);
      revalidatePathServer("/tips");
    } catch (error) {
      console.log(error);
      toast.error(`Error al crear el tip`);
    }
    setTitle("");
    setDescription("");
  };

  if (access === DecisionType.DENY) {
    return (
      <p className="text-red-500 text-center">
        No tienes permiso para crear tips. Solo los administradores pueden
        crear.
      </p>
    );
  }
  return (
    <div className="mb-4 px-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Crear Tip del Día</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-stretch border rounded-lg shadow-sm p-4 gap-4"
      >
        <div className="flex-1 flex flex-col">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título del tip:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descripción del tip:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ingrese la descripción"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50"
            disabled={title.trim() === "" || description.trim() === ""}
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TipForm;
