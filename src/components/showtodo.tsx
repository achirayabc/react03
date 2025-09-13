// components/ShowTodo.tsx
import { usetodoStore } from "../store/todoStore";
import RemoveTodo from "./remove";
import AddTodo from "./todoForm";

export default function ShowTodo() {
  const { message, todoList } = usetodoStore();

  return (
    <div>
      <h2>{message}</h2>
      <AddTodo />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} <RemoveTodo index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
