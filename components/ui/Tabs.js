"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function TabsWrapper({ children }) {
  const urlSegment = useSelectedLayoutSegment();
  const activeTab = urlSegment === "usuarios" ? "usuarios" : "inicio";
  return (
    <div className="bg-gray-100 p-4">
      <ul className="flex border-b">
        <li className="-mb-px mr-2">
          <Link
            href="/"
            className={`py-2 px-4 inline-block ${
              activeTab === "inicio" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Inicio
          </Link>
        </li>
        <li className="-mb-px mr-2">
          <Link
            href="/usuarios"
            className={`py-2 px-4 inline-block ${
              activeTab === "usuarios" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Usuarios
          </Link>
        </li>
      </ul>
      <div className="bg-white p-4 mt-4 rounded shadow-md">{children}</div>
    </div>
  );
}

export default TabsWrapper;
