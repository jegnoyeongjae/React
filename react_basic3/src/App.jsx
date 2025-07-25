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
  const handlemodifyTodo = (id, updateText) => {
    console.log('App1', id);
    console.log('App2', updateText);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, content: updateText } : todo
      )
    );
  };

  // 일정 데이터 삭제 함수
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //완료 여부를 처리 하는 함수
  const handleChangeTodoDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div id="App">
      <TodoTop />
      <TodoEditor handleAddTodo={handleAddTodo} />
      <TodoList
        todoDatas={todos}
        handleChangeTodoDone={handleChangeTodoDone}
        handleDeleteTodo={handleDeleteTodo}
        handlemodifyTodo={handlemodifyTodo}
      />
    </div>
  );
}

export default App;
