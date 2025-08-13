// list페이지의 main이 오늘의 글이고 헤더 좌우 버튼 클릭시 달 데이터로 넘어가는 버전(오늘자 글 메인 페이지로 분리전)

import { useEffect, useState } from 'react';
import './ListPage.css';
import { useOutletContext } from 'react-router-dom';

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

  /*
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth();
  const firstDay = new Date(thisYear, thisMonth, 1);
  const lastDay = new Date(thisYear, thisMonth + 1, 1);

  // 이달 날짜 데이터 필터링
    const filterDiary = Data.filter(
      (diary) =>
        new Date(diary.date) >= firstDay && new Date(diary.date) < lastDay
    );
   */

  useEffect(() => {
    setHeaderProps({
      title: date.toLocaleDateString('KO-kr'),
      handleClickPrev,
      handleClickNext,
    });
    /*
    // 오늘 날짜 데이터 필터링
    const nowFilterDiary = Data.filter(
      
       - 문제) (now) => new Date(now.date) == new Date('2025-08-17') 
        를 하니 undefined 값만 출력됌.
       - 해결) 위의 filterDiary는 범위 비교이기 때문에 내부적으로 valueof()로 변환하여 비교 
        하지만 같은 값을 찾을 때는 valueof()가 적용되지 않는다. 때문에 직접 명시적으로
        valueof()를 붙여 줘야 정상적인 비교 가능
       
      (now) => new Date(now.date).valueOf() == nowMonth
    );
    */
    const today = new Date();
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      // 오늘 날짜면 하루 데이터만 보여줌
      setListData(getFilteredDiaryByDay(date));
    } else {
      // 그 외엔 달 전체 데이터 보여줌
      setListData(getFilteredDiaryByMonth(date));
    }
  }, [Data, date]);

  // 이전 달 버튼 클릭 시
  const handleClickPrev = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
    setListData(getFilteredDiaryByMonth(newDate));
  };

  // 다음 달 버튼 클릭 시
  const handleClickNext = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
    setListData(getFilteredDiaryByMonth(newDate));
  };
  return (
    <div className="ListPage">
      <div className="list-top">
        <div className="total">총 {listData.length}개</div>
        <div className="select-wrap">
          {listData.map((data, idx) => (
            <span key={idx}> {data.title}</span>
          ))}
        </div>
      </div>
      <div className="btn-go-create">
        링크 태그 이용해서 새글
        <br />
        쓰기
      </div>
    </div>
  );
};

export default ListPage;
