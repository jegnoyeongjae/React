import { TodoEditor, TodoList, TodoTop } from './components';
import './App.css';
import { useState } from 'react';
const initialTodos = [
  {
    id: 2,
    content: '영단어 외우기',
    createdDate: new Date(2025, 8, 26).getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: '청소하기',
    createdDate: new Date(2025, 7, 25).getTime(),
    isDone: false,
  },
  {
    id: 0,
    content: '서점방문',
    createdDate: new Date(2025, 7, 24).getTime(),
    isDone: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  // 일정 데이터 추가 함수
  const handleAddTodo = (content) => {
    const newTodoData = {
      id: todos.length,
      content: content,
      createdDate: new Date().getTime(),
      isDone: false,
    };

    console.log(newTodoData);
    setTodos([...todos, newTodoData]);
  };

  // 일정 데이터 수정 함수
  const handlemodifyTodo = () => {};

  return (
    <div id="App">
      <TodoTop />
      <TodoEditor handleAddTodo={handleAddTodo} />
      <TodoList todoDatas={todos} />
    </div>
  );
}

export default App;
