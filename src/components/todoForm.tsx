// components/AddTodo.tsx
import { useState } from "react";
import { usetodoStore } from "../store/todoStore";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const addTodo = usetodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAdd}>เพิ่ม</button>
    </div>
  );
}
