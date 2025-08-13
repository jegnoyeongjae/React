import { useEffect, useState } from 'react';

import './ListPage.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import DiaryList from '../components/diary/DiaryList';

const SORT_OPTION_LIST = [
  { value: 'latest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const FILTER_OPTION_LIST = [
  { value: 'all', name: '전체' },
  { value: 'sunny', name: '맑음' },
  { value: 'cloudy', name: '흐림' },
  { value: 'rainny', name: '비' },
];

const ListPage = ({ Data }) => {
  const [date, setDate] = useState(new Date());
  const [listData, setListData] = useState([]);
  const { setHeaderProps } = useOutletContext();
  const navigate = useNavigate();

  const getFilteredDiaryByMonth = (dateToFilter) => {
    const year = dateToFilter.getFullYear();
    const month = dateToFilter.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 1);

    return Data.filter(
      (diary) =>
        new Date(diary.date) >= firstDay && new Date(diary.date) < lastDay
    );
  };

  const getFilteredDiaryByDay = (dayToFilter) => {
    return Data.filter(
      (diary) =>
        new Date(diary.date).toDateString() === dayToFilter.toDateString()
    );
  };

  useEffect(() => {
    setHeaderProps({
      title: date.toLocaleDateString('KO-kr'),
      handleClickPrev: handleClickHeaderBtn,
      handleClickNext: handleClickHeaderBtn,
    });

    const today = new Date();
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      // 오늘 날짜면 하루 데이터만 보여줌
      setListData(getFilteredDiaryByDay(date));
    }
  }, [Data, date]);

  // 이전 달 버튼 클릭 시
  const handleClickHeaderBtn = () => {
    navigate('/list');
  };

  return (
    <div className="ListPage">
      <div className="list-top">
        <div className="total">총 {listData.length}개</div>
        <div className="select-wrap"></div>
      </div>
      <DiaryList monthData={listData} />
      <div className="btn-go-create">링크 태그 이용해서 새글 쓰기</div>
      <br />
    </div>
  );
};

export default ListPage;
