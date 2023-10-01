"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const revalidatePathServer = (path, type = "page") => {
  revalidatePath(path, type);
};

export const saveToken = (token) => {
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  cookies().set({
    name: "tokenTodo",
    value: token,
    httpOnly: false,
    expires: expirationDate,
    path: "/",
  });
};

export const getToken = () => {
  return cookies().get("tokenTodo")?.value;
};
