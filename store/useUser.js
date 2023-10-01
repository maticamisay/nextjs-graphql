import { create } from "zustand";

const useUser = create((set) => ({
  user: { role: "GUEST" },
  setUser: (user) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: { role: "GUEST" } })),
}));

export default useUser;
