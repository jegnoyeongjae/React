import { Link } from 'react-router-dom';
import { WEATHER_ICONS } from '../../constants';
import './DiaryItem.css';

const DiaryItem = ({ diary }) => {
  return (
    <li className="DiaryItem">
      <Link to={`/detail/${diary.id}`}>
        <p className="left">
          <span className="weather">{WEATHER_ICONS[diary.weather]}</span>
          <span className="title">{diary.title}</span>
        </p>
        <p className="date">{diary.date}</p>
      </Link>
    </li>
  );
};

export default DiaryItem;
