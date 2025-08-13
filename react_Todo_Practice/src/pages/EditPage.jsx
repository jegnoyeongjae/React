import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DiaryEdit from '../components/diary/DiaryEdit';

const EditPage = ({ Data }) => {
  const { id } = useParams();
  const numID = Number(id);

  console.log('num아이디', numID);

  const detailData = Data.find((item) => item.id === numID);

  console.log('디테일 데이터', detailData);
  useEffect(() => {}, [id]);

  return (
    <div className="EditPage">
      <p>Edit</p>
      <DiaryEdit data={detailData} />
    </div>
  );
};

export default EditPage;
