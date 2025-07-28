import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { doneTodo, updateTodo, removeTodo } = useContext(TodoContext);

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.content);

  const openEdit = () => setIsEdit(true);
  const cancleEdit = () => setIsEdit(false);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, text);
  };

  return (
    <div className="TodoItem">
      <h3>TodoItem</h3>
      {todo.content}
      <button onClick={() => doneTodo(todo.id)}>
        {todo.isDone ? '미 완료' : '할일 완료'}
      </button>
      {isEdit && (
        <>
          <input type="text" value={text} onChange={handleChangeText} />
          <button onClick={() => updateTodo(todo.id, text)}>수정</button>
          <button onClick={cancleEdit}>취소</button>
        </>
      )}
      {!isEdit && <button onClick={openEdit}>수정 열기</button>}
      <button onClick={() => removeTodo(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
