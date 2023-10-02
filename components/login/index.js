"use client";
import useUser from "@/store/useUser";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { saveToken } from "@/app/actions";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          name: username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok || data.name === "ApolloError") {
        throw new Error(data.message);
      }
      toast.success("Sesión iniciada correctamente");
      setUser({ name: data.name, role: data.role });
      await saveToken(data.token);
      router.push("/");
    } catch (error) {
      console.log(error);
      setUsername("");
      setPassword("");
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="username"
                name="username"
                type="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Username"
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
