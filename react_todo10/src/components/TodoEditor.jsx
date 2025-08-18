import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TodoEditor = ({ isEdit, onCreatedTodo, onUpdateTodo }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChangeTitle = e => setTitle(e.target.value);
    const handleChangeContent = e => setContent(e.target.value);

    const handleClickCancle = () => {
        if (confirm(isEdit ? '수정을 취소하시겠습니까?' : '작성을 취소하시겠습니까?')) {
            if (isEdit) {
                navigate(`/detail/${id}`);
                // navigate('/detail/' + id);
            } else {
                navigate('/');
            }
        } 
    }

    const handleClickSave = () => {
        if(isEdit){
            
        } else {
            const formData = {
                id: new Date().getTime(),
                title,
                content,
                createdDate: new Date().toISOString().slice(0,10),
                isDone: false
            }
            onCreatedTodo(formData);
            navigate(`/detail/${formData.id}`);
        }
    }
    
    return (
        <div id="TodoEditor">
            <div>
                <input
                    type="text"
                    placeholder="할 일의 제목을 작성해주세요."
                    value={title}
                    onChange={handleChangeTitle}
                />
            </div>
            <div>
                <textarea
                    placeholder="할 일의 내용을 작성해주세요."
                    value={content}
                    onChange={handleChangeContent}
                ></textarea>
            </div>
            <div className="btn">
                <button onClick={handleClickCancle}>취소하기</button>
                <button onClick={handleClickSave}>저장하기</button>
            </div>
        </div>
    )
}

export default TodoEditor;