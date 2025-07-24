import './TodoTop.css';

const TodoTop = () => {
  const today = new Date().toLocaleDateString('ko-kr');

  return (
    <div className="TodoTop">
      <h2>오늘 날짜</h2>
      <p>{today}</p>
    </div>
  );
};

export default TodoTop;
