import { TodoEditor } from "../components";

const CreatePage = ({onCreatedTodo}) => {
    return(
        <div id="CreatePage">
            <TodoEditor isEdit={false} onCreatedTodo={onCreatedTodo} />
        </div>
    )
}

export default CreatePage;