import { useEffect, useState } from 'react';
import './DiaryEdit.css';

const DiaryEdit = ({ data }) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [weather, setWeather] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDate(String(data.date));
      setWeather(data.weather);
      setContent(data.content);
    }
  }, [data]);

  return (
    <div className="DiaryEdit">
      <div className="title">
        <h3>제목</h3>
        <p>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            name="diaryTitle"
            id="diaryTitle"
            value={title}
          />
        </p>
        <p className="noti">제목을 반드시 입력해주세요.</p>
      </div>
      <div className="date">
        <h3>날짜</h3>
        <p>
          <input type="date" name="diaryTitle" id="diaryitle" value={date} />
        </p>
      </div>
      <div className="weather">
        <h3>날씨</h3>
        <ul>{weather}</ul>
      </div>
      <div className="content">
        <h3>내용</h3>
        <p>
          <textarea
            name="diaryContent"
            id="diaryContent"
            value={content}
          ></textarea>
        </p>
        <p className="noti">내용을 반드시 입력해주세요.</p>
      </div>
      <div className="processBtn">
        <button>취소하기</button>
        <button className="btn-primary">저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEdit;
