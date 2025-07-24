import { useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ handleAddTodo }) => {
  const [text, setText] = useState('');
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleClickAddBtn = (text) => {
    handleAddTodo(text);
  };

  return (
    <div className="TodoEditor">
      <h2>새로 할 일 작성하기</h2>
      <div className="TodoEditor-edit-box">
        <input
          type="text"
          placeholder="할일 입력"
          value={text}
          onChange={handleChangeText}
        />
        <button onClick={() => handleClickAddBtn(text)}>추가하기</button>
      </div>
    </div>
  );
};

export default TodoEditor;
