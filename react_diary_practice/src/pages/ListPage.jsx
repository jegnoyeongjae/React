import { DiaryItem } from '../components';
const ListPage = ({ diary }) => {
  return (
    <div className="ListPage">
      {diary.map((dData) => (
        <DiaryItem key={dData.id} diary={dData} />
      ))}
    </div>
  );
};

export default ListPage;
