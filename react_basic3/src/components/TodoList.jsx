import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todoDatas, onDelete, onUpdate }) => {
  const [text, setText] = useState('');
  const handleChangeText = (e) => setText(e.target.value);

  // const filteredTodos = text ? 필터링 데이터: 전체데이터;
  // const filteredTodos = text ? 필터링 데이터: todoDatas;
  // const filteredTodos = text ? 필터링 todoDtas.filter(): todoDatas;

  const filteredTodos = text
    ? todoDatas.filter((item) => item.content.includes(text))
    : todoDatas;

  return (
    <div className="TodoList">
      <h2>할 일 목록</h2>
      <div className="TodoList-search">
        <input
          type="text"
          placeholder="검색어 입력"
          value={text}
          onChange={handleChangeText}
        />
      </div>
      <div className="todoList-list">
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todoData={todo}
              onDelete={() => onDelete(todo.id)}
              onUpdate={(newContent) => onUpdate(todo.id, newContent)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
