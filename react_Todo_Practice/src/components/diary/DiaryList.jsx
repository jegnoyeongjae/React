import DiaryItem from './DiaryItem';

const DiaryList = ({ monthData }) => {
  return (
    <div className="DiaryList">
      <ul>
        {monthData.map((data) => (
          <DiaryItem key={data.id} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
