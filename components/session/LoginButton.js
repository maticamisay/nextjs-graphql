import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="text-white no-underline hover:underline hover:text-gray-200 ml-4"
    >
      Iniciar sesión
    </Link>
  );
};

export default LoginButton;
