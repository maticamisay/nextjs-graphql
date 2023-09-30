"use server";
import { revalidatePath } from "next/cache";

export const revalidatePathServer = (path, type = "page") => {
  revalidatePath(path, type);
};
