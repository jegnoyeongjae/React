const DiaryItem = ({ diary }) => {
  const WEATHER_ICON = [
    { value: 'sunny', label: '맑음', icon: '☀️' },
    { value: 'cloudy', label: '흐림', icon: '☁️' },
    { value: 'rainny', label: '비', icon: '🌧️' },
  ];

  // diary.weather 값에 해당하는 아이콘 찾기
  const matchedWeather = WEATHER_ICON.find(
    (item) => item.value === diary.weather
  );

  return (
    <div className="DiaryItem">
      <h2>{diary.id}</h2>
      <span className="weather">{matchedWeather?.icon}</span>
      {diary.title}
      {diary.date}
    </div>
  );
};

export default DiaryItem;
