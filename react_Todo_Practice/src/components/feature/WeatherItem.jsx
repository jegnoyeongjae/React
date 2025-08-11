import './WeatherItem.css';

const WeatherItem = () => {
  return (
    <li className="WeatherItem">
      <button className={'isActive 값에 따라 active주기'}>
        <span className="icon"></span>
        <span className="label"></span>
      </button>
    </li>
  );
};

export default WeatherItem;
