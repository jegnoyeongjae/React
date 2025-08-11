import './DiaryItem.css';

const DiaryItem = () => {
  return (
    <li className="DiaryItem">
      링크태그 걸기
      <p className="left">
        <span className="weather"></span>
        <span className="title"></span>
      </p>
      <p className="date"></p>
    </li>
  );
};

export default DiaryItem;
