import './App.css';
import { TodoForm } from './components/todoForm';
import Todolist from './components/showtodo'; 

function App() {
  return (
    <div>
      <TodoForm />
      <Todolist />
    </div>
  );
}

export default App;
