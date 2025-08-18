import { useNavigate } from "react-router-dom";

const TodoDetail = ({todo}) => {
    const navigate = useNavigate();

    const handleClickGoUpdate = () => {
        navigate(`/edit/${todo.id}`);
    }

    const handleClickGoList = () => {
        navigate('/list');
    }

    return(
        <div id="TodoDetail">
            <h2>{todo.title}</h2>
            <div>{todo.content}</div>
            <div>{todo.createdDate}</div>
            <div>{todo.isDone ? '완료' : '미완료'}</div>
            <div>
                <button>삭제하기</button>
                <button onClick={handleClickGoUpdate}>수정하기</button>
                <button onClick={handleClickGoList}>목록으로</button>
            </div>
        </div>
    )
}

export default TodoDetail;