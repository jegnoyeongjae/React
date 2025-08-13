import { Link } from 'react-router-dom';
import './DiaryItem.css';
import { WEATHER_ICONS } from '../../constants/ui';

const DiaryItem = ({ data }) => {
  return (
    <li className="DiaryItem">
      <Link to={`/detail/${data.id}`}>
        <p className="left">
          <span className="weather">{WEATHER_ICONS[data.weather]}</span>
          <span className="title">{data.title}</span>
        </p>
        <p className="date">{data.date}</p>
      </Link>
    </li>
  );
};

export default DiaryItem;
