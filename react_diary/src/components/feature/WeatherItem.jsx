import './WeatherItem.css';

const WeatherItem = ({ item, handleClickWeather, isActive }) => {
  return (
    <li className="WeatherItem">
      <button
        className={isActive ? 'active' : ''}
        onClick={() => {
          handleClickWeather(item.value);
        }}
      >
        <span className="icon">{item.icon}</span>
        <span className="icon">{item.label}</span>
      </button>
    </li>
  );
};

export default WeatherItem;
