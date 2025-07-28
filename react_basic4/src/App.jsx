import './App.css';
import { TodoEditor, TodoList } from './components/Index';
import { TodoProvider, TodoContext } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <TodoEditor />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
