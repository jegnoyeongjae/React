import { useState, useRef } from 'react';
import { WEATHER_LIST } from '../../constants';
import { WeatherItem } from '../feature';
import { useNavigate } from 'react-router-dom';

import './DiaryEdit.css';

const DiaryEdit = ({ onCreate }) => {
  const navigate = useNavigate();

  const todayString = new Date().toISOString().slice(0, 10);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(todayString);
  const [weather, setWearther] = useState('sunny');
  const [content, setContent] = useState('');

  const titleInputRef = useRef();
  const titleNotiRef = useRef();
  const contentInputRef = useRef();
  const contentNotiRef = useRef();

  const handleChangeTitle = (e) => {
    titleNotiRef.current.style.display = 'none';
    setTitle(e.target.value);
  };
  const handleChangeDate = (e) => setDate(e.target.value);
  const handleChangeContent = (e) => {
    contentNotiRef.current.style.display = 'none';
    setContent(e.target.value);
  };
  const handleClickWeather = (state) => setWearther(state);

  const handleClickCancle = () => {
    if (confirm('작성을 취소 하시겠 습니까?')) {
      navigate(-1);
    } else {
      return;
    }
  };

  const handleClickSubmit = () => {
    if (!title.trim() && !content.trim()) {
      titleNotiRef.current.style.display = 'block';
      contentNotiRef.current.style.display = 'block';
      titleInputRef.current.focus();
      return;
    } else if (!title.trim()) {
      titleNotiRef.current.style.display = 'block';
      titleInputRef.current.focus();
      return;
    } else if (!content.trim()) {
      contentNotiRef.current.style.display = 'block';
      contentInputRef.current.focus();
      return;
    }

    const formData = {
      title,
      date,
      weather,
      content,
    };

    onCreate(formData);
    navigate('/');
  };

  return (
    <div className="DiaryEdit">
      <div className="title">
        <h3>제목</h3>
        <p>
          <input
            type="text"
            placeholder="제목을 입력해 주세요"
            name="diaryTitle"
            id="diaryTitle"
            value={title}
            onChange={handleChangeTitle}
            ref={titleInputRef}
          />
        </p>
        <p className="noti" ref={titleNotiRef}>
          제목을 반드시 입력해 주세요
        </p>
      </div>
      <div className="date">
        <h3>날짜</h3>
        <p>
          <input
            type="date"
            name="diaryDate"
            id="diaryDate"
            value={date}
            onChange={handleChangeDate}
          />
        </p>
      </div>
      <div className="weather">
        <h3>날씨</h3>
        <ul>
          {WEATHER_LIST.map((item, idx) => (
            <WeatherItem
              key={idx}
              item={item}
              handleClickWeather={handleClickWeather}
              isActive={item.value == weather}
            />
          ))}
        </ul>
      </div>
      <div className="content">
        <h3>내용</h3>
        <textarea
          name="diaryContent"
          id="diaryContent"
          value={content}
          onChange={handleChangeContent}
          ref={contentInputRef}
        ></textarea>
        <p className="noti" ref={contentNotiRef}>
          내용을 반드시 입력해 주세요
        </p>
      </div>
      <div className="processBtn">
        <button onClick={handleClickCancle}>취소</button>
        <button className="btn-primary" onClick={handleClickSubmit}>
          저장
        </button>
      </div>
    </div>
  );
};

export default DiaryEdit;
