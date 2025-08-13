// 리액트의 리듀서를 사용해 컨트롤

import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { WEATHER_ICONS } from '../constants/ui';

const DetailPage = ({ Data }) => {
  const { setHeaderProps } = useOutletContext();
  const { id } = useParams();
  const numId = Number(id);
  const navi = useNavigate();

  // 날짜 순으로 정렬
  const sortedData = [...Data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // 현재 데이터 index 찾기
  const currentIndex = sortedData.findIndex((item) => item.id === numId); // 찾은 데이터의 index값을 반환한다.
  const findData = sortedData[currentIndex];

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      const prevId = sortedData[currentIndex - 1].id;
      navi(`/detail/${prevId}`); // 라우터 이동
    }
  };

  const handleClickNext = () => {
    if (currentIndex < sortedData.length - 1) {
      const nextId = sortedData[currentIndex + 1].id;
      navi(`/detail/${nextId}`);
    }
  };

  useEffect(() => {
    setHeaderProps({
      title: findData?.title,
      handleClickPrev,
      handleClickNext,
    });
  }, [findData]);

  const handleGoList = () => {
    navi('/list');
  };

  const handleGoEdit = () => {
    navi(`/edit/${id}`);
  };

  const handleRemoveDiary = () => {
    if (confirm('해당 일기를 정말 삭제하시겠습니까?')) {
      onRemove(numId);
      navi('/');
    }
  };

  return (
    <div className="DetailPage">
      <div className="detail-page-content">
        <div className="top">
          <p className="date">{findData?.date || '날짜 없음'}</p>
          <p className="weather">
            {WEATHER_ICONS[findData?.weather] || '날씨 없음'}
          </p>
        </div>
        <div className="content">{findData?.content || '게시글 없음'}</div>
      </div>
      <br />
      <div className="detail-page-btn">
        <button>삭제하기</button>
        <br />
        <button onClick={handleGoEdit}>수정하기</button>
        <br />
        <button onClick={handleGoList}>목록</button>
      </div>
    </div>
  );
};

export default DetailPage;
