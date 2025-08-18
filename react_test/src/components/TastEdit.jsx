import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";

const TastEdit = ({ isEdit, todos, onCreatedTodo, onUpdateTodo }) => {
  const { id } = useParams();
  const numId = Number(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (isEdit && todos && todos.length > 0) {
      const current = todos.find(item => item.id === numId);
      if (current) {
        setTitle(current.title || "");
        setContent(current.content || "");
        setStartDate(formatDate(current.startDate));
        setDueDate(formatDate(current.dueDate));
      }
    }
  }, [isEdit, todos, numId]);

  const handleSave = () => {
    const formData = {
      id: isEdit ? numId : new Date().getTime(),
      title,
      content,
      startDate,
      dueDate,
      createdDate: isEdit
        ? todos.find(item => item.id === numId).createdDate
        : new Date().toISOString(),
      isDone: isEdit
        ? todos.find(item => item.id === numId).isDone
        : false,
    };

    if (isEdit) {
      onUpdateTodo(numId, formData);
    } else {
      onCreatedTodo(formData);
    }

    navigate(isEdit ? `/detail/${numId}` : `/detail/${formData.id}`);
  };

  return (
    <div id="TastEdit">
      <div>
        <input
          type="text"
          placeholder="할 일 제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="할 일 내용"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div>
        <label>시작일:</label>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>종료일:</label>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div className="btn">
        <button onClick={handleSave}>{isEdit ? "수정하기" : "생성하기"}</button>
      </div>
    </div>
  );
};
export default TastEdit;