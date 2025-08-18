import { TodoEditor } from "../components";

const EditPage = ({onUpdateTodo}) => {
    return(
        <div id="EditPage">
            <TodoEditor isEdit={true} onUpdateTodo={onUpdateTodo} />
        </div>
    )
}

export default EditPage;