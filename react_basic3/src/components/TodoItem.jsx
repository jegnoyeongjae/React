import { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({
  todoData,
  handleChangeTodoDone,
  handleDeleteTodo,
  handlemodifyTodo,
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(todoData.content);
  const formmatedDate = new Date(todoData.createdDate).toLocaleDateString(
    'ko-KR'
  );
  const onDeleteTodo = () => {
    if (confirm('ㄹㅇ삭제하심?')) {
      handleDeleteTodo(todoData.id);
    }
    return;
  };
  const onUpdateTodo = () => {
    setIsUpdate(!isUpdate);
  };

  const handleChangeUpdateText = (e) => setUpdateText(e.target.value);

  const onUpdateContent = () => {
    alert(todoData.id);
    alert(updateText);
    handlemodifyTodo(todoData.id, updateText);
    onUpdateTodo();
  };

  return (
    <li className={todoData.isDone ? 'TodoItem active' : 'TodoItem'}>
      {/* <li className={`TodoItem ${todoData.isDone ? 'active':''}`}> */}
      <div className="left">
        <input
          type="checkbox"
          onChange={() => handleChangeTodoDone(todoData.id)}
        />
        <span className="content"> {todoData.content}</span>
      </div>
      <p className="right">
        <span className="date">{formmatedDate}</span>
        <button onClick={onUpdateTodo}>수정</button>
        <button onClick={onDeleteTodo}>삭제</button>
      </p>
      {isUpdate && (
        <div className="update-form">
          <input
            type="text"
            value={updateText}
            onChange={handleChangeUpdateText}
          />
          <button onClick={onUpdateContent}>저장</button>
          <button onClick={onUpdateTodo}>취소</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
