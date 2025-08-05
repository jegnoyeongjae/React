import "./WeatherItem.css";

const WeatherItem = ({item, handleClick, isActive}) => {
    return(
        <li className="WeatherItem">
            <button 
                className={isActive ? 'active' : ''}
                onClick={() => {handleClick(item.value)}}
            >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
            </button>
        </li>
    )
}

export default WeatherItem;
