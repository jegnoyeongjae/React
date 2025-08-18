import { TodoItem } from "../components";

import "./ListPage.css";

const ListPage = ({todos}) => {
    return(
        <div id="ListPage">
            <div className="todo-list">
                <ul>
                    {todos.map((todo, idx) => 
                        <TodoItem key={idx} todo={todo}  />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListPage;