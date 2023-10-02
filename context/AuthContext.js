"use client";
import { clearToken, getToken } from "@/app/actions";
import { Role } from "@/lib/constants";
import useUser from "@/store/useUser";
import { createContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    getToken().then((token) => {
      if (token && user.role === Role.GUEST) {
        fetch("/api/login/revalidate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("HTTP error, status = " + res.status);
            }
            return res.json();
          })
          .then((res) => {
            setUser({
              name: res.name,
              role: res.role,
            });
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
            clearToken();
          });
      }
    });
  }, [setUser, user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
