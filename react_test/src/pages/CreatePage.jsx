import { TastEdit } from "../components";

const CreatePage = ({ onCreatedTodo }) => {
  return (
    <div id="CreatePage">
      <TastEdit isEdit={false} onCreatedTodo={onCreatedTodo} />
    </div>
  );
};

export default CreatePage;
