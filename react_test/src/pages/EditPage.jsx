import { TastEdit } from "../components";

const EditPage = ({ todos, onUpdateTodo }) => {
  return (
    <div id="EditPage">
      <TastEdit isEdit={true} todos={todos} onUpdateTodo={onUpdateTodo} />
    </div>
  );
};

export default EditPage;
