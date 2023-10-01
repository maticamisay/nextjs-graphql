"use client";
import useUser from "@/store/useUser";
import React from "react";
import { Role } from "@/lib/constants";
import LoggedButtons from "./LoggedButtons";
import LoginButton from "./LoginButton";

const NavbarSession = () => {
  const { user } = useUser();
  return <>{user.role !== Role.GUEST ? <LoggedButtons /> : <LoginButton />}</>;
};

export default NavbarSession;
