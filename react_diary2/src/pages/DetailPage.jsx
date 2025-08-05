// 리액트의 리듀서를 사용해 컨트롤

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header } from '../components/commen';

import { WEATHER_ICONS } from '../constants';
import { formatTextWithBr } from '../utills';

const DetailPage = ({ diarys, onRemove }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const numId = Number(id);

  const [diary, setDiary] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const found = diarys.find((item) => item.id === numId);
    setDiary(found);
  };

  const handleGoList = () => {
    navigate('/');
  };

  const handleGoEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleRemoveDiary = () => {
    if (confirm('해당 일기를 정말 삭제하시겠습니까?')) {
      onRemove(numId);
      navigate('/');
    }
  };

  const lines = formatTextWithBr(diary.content);

  return (
    <div className="DetailPage">
      <Header
        title={diary.title}
        btnLeft={'목록 페이지로 이동'}
        handleLeftBtn={handleGoList}
      />
      <div className="detail-page-content">
        <div className="top">
          <p className="date">{diary.date}</p>
          <p className="weather">{WEATHER_ICONS[diary.weather]}</p>
        </div>
        <div className="content">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
      <div className="detail-page-btn">
        <button onClick={handleRemoveDiary}>삭제하기</button>
        <button onClick={handleGoEdit}>수정하기</button>
      </div>
    </div>
  );
};

export default DetailPage;
