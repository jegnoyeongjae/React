import { useNavigate } from 'react-router-dom';
import { Header } from '../components/commen';
import { DiaryEdit } from '../components/diary';

const CreatePage = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="CreatePage">
      <Header
        title={'신규 작성 페이지'}
        btnLeft={'이전 페이지로 이동'}
        handleClickBack={handleClickBack}
      />

      <DiaryEdit onCreate={onCreate} />
    </div>
  );
};

export default CreatePage;
