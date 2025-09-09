import { create } from "zustand";

interface TodoInterface {
  message: string;
  todos: string[];
  addTodo: (msg: string) => void;
  removeTodo: (index: number) => void;
  clearTodos: () => void;
}

export const todoStore = create<TodoInterface>((set) => ({
  message: "Todo list",
  todos: [],
  addTodo: (msg: string) =>
    set((state) => ({ todos: [...state.todos, msg] })),

  removeTodo: (index: number) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  
  clearTodos: () => set({ todos: [] }),
}));
