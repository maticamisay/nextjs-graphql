"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function TabsWrapper({ children }) {
  const urlSegment = useSelectedLayoutSegment();

  const tabMapping = {
    usuarios: "usuarios",
    null: "inicio",
    tipsofday: "tipsofday",
  };
  const activeTab = tabMapping[urlSegment] || "__DEFAULT__";
  if (urlSegment === "login") return children;
  return (
    <div className="bg-gray-100 p-4">
      <ul className="flex flex-col sm:flex-row border-b space-y-2 sm:space-y-0 sm:space-x-2">
        <li>
          <Link
            href="/"
            className={`py-2 px-4 inline-block ${
              activeTab === "inicio" ? "border-b-2 border-blue-500" : ""
            } hover:bg-blue-100 rounded transition ease-in-out duration-150`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/usuarios"
            className={`py-2 px-4 inline-block ${
              activeTab === "usuarios" ? "border-b-2 border-blue-500" : ""
            } hover:bg-blue-100 rounded transition ease-in-out duration-150`}
          >
            Usuarios
          </Link>
        </li>
        <li>
          <Link
            href="/tipsofday"
            className={`py-2 px-4 inline-block ${
              activeTab === "tipsofday" ? "border-b-2 border-blue-500" : ""
            } hover:bg-blue-100 rounded transition ease-in-out duration-150`}
          >
            Consejo del día
          </Link>
        </li>
      </ul>
      <div className="bg-white p-4 mt-4 rounded shadow-md min-h-[400px] sm:min-h-[600px] md:min-h-[800px]">
        {children}
      </div>
    </div>
  );
}

export default TabsWrapper;
