import { useState, useRef } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ handleAddTodo }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();
  const notiRef = useRef();
  const handleChangeText = (e) => {
    notiRef.current.style.display = 'none';
    setText(e.target.value);
  };
  const handleClickAddBtn = () => {
    const value = text.trim();
    if (!value) {
      notiRef.current.style.display = 'block';
      inputRef.current.focus();
      return;
    }
    handleAddTodo(text);
    setText('');
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
          ref={inputRef}
        />
        <button onClick={() => handleClickAddBtn()}>추가하기</button>
      </div>
      <div className="TodoEditor-deit-noti" ref={notiRef}>
        할일 입력하소
      </div>
    </div>
  );
};

export default TodoEditor;
