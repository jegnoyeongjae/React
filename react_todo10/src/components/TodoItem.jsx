import { Link } from 'react-router-dom';
import './TodoItem.css';
const TodoItem = ({todo}) => {
    return (
        <li className="TodoItem">
            <div className="left">
                <p className="checkDone">
                    <input 
                        type="checkbox" 
                        name="todoDone" 
                        id="todoDone" 
                    />
                </p>
                <p className="title">
                    <Link to={`/detail/${todo.id}`}>
                        {todo.title}
                    </Link>
                </p>
            </div>
            <div className="right">
                <p className="date">{todo.createdDate}</p>
                <p className="btn"><button>삭제</button></p>
                <p className="btn"><button>수정</button></p>
            </div>
        </li>
    )
}

export default TodoItem;