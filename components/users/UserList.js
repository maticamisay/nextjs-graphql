"use client";
import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <div className="mt-8 min-h-[65vh]">
      <h2 className="text-xl font-bold mb-3">Lista de Usuarios</h2>
      <ul className="bg-white shadow rounded p-4 overflow-none">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
