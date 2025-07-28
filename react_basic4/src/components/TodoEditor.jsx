import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoEditor = () => {
  const { addTodo } = useContext(TodoContext);

  const [text, setText] = useState('');
  const handleChangeText = (e) => setText(e.target.value);

  return (
    <div className="TodoEditor">
      <h3>TodoEditor</h3>
      <input type="text" value={text} onChange={handleChangeText}></input>
      <button
        onClick={() => {
          addTodo(text);
        }}
      >
        추가
      </button>
    </div>
  );
};

export default TodoEditor;
