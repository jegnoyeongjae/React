// 정리되기 전에 난잡한 버전 원본과 비교 분석 하면서 뭔 차이인지 분석해보기 바람(원본: ListPage)

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
  const nowMonth = date.toLocaleDateString('Ko-kr');
  const [initialLoad, setInitialLoad] = useState(true); // 초기 로딩 상태
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
      title: nowMonth,
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
    if (initialLoad) {
      // 초기 로딩 시 오늘 날짜 데이터만 필터링
      setListData(getFilteredDiaryByDay(date));
      setInitialLoad(false);
    } else {
      // 이후에는 달 전체 데이터 필터링
      setListData(getFilteredDiaryByMonth(date));
    }
  }, [nowMonth, Data, date]);

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
