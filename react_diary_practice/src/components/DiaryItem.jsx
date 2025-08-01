const WEATHER_ICONS = {
    sunny : '☀️',
    cloudy : '☁️', 
    rainny: '🌧️'
};

const DiaryItem = ({diary}) => {

    return (
        <div className="DiaryItem">
            {WEATHER_ICONS[diary.weather]}
            {diary.title}
            {diary.date}
        </div>
    )
}

export default DiaryItem;