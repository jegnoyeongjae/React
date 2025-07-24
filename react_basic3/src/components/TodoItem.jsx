import './TodoItem.css';

const TodoItem = ({ todoData }) => {
  const formmatedDate = new Date(todoData.createdDate).toLocaleDateString(
    'ko-KR'
  );
  const listId = todoData.id;
  return (
    <li className="TodoItem">
      <p className="left">
        <input type="checkbox" />
        <span> {todoData.content}</span>
      </p>
      <p className="right">
        <span className="date">{formmatedDate}</span>
        <button>수정</button>
        <button>삭제</button>
      </p>
    </li>
  );
};

export default TodoItem;
