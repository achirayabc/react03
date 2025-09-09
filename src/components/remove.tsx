import { todoStore } from "../store/todoStore";

export function Remove() {
  const todos = todoStore((state) => state.todos);
  const removeTodo = todoStore((state) => state.removeTodo);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>ลบ</button>
        </li>
      ))}
    </ul>
  );
}
