import { create } from "zustand";

const useEditTodo = create((set) => ({
  todo: null,
  setTodo: (todo) => set(() => ({ todo })),
  clearTodo: () => set(() => ({ todo: null })),
}));

export default useEditTodo;
