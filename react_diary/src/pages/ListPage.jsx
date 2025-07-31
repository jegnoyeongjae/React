import './ListPage.css';
import { Header } from '../components/common';
import { useEffect, useState } from 'react';
import { DiaryList } from '../components/diary';
import { SelectBox } from '../components/feature';

const SORT_OPTION_LIST = [
  {
    value: 'latest',
    name: '최신순',
  },
  {
    value: 'oldest',
    name: '오래된 순',
  },
];
const FILTER_OPTION_LIST = [
  {
    value: 'all',
    name: '전체',
  },
  {
    value: 'sunny',
    name: '맑음',
  },
  {
    value: 'cloudy',
    name: '흐림',
  },
  {
    value: 'rainny',
    name: '비',
  },
];

const ListPage = ({ diary }) => {
  const [nowDate, setNowDate] = useState(new Date());
  const [diaryData, setDiarData] = useState([]); // 날짜에 맞는 다이어리 목록

  const [currentSort, setCurrentSort] = useState(SORT_OPTION_LIST[0].value);
  const [currentFilter, setCurrentFilter] = useState(
    FILTER_OPTION_LIST[0].value
  );

  const handleChangeSort = (e) => setCurrentSort(e.target.value);
  const handleChangeFilter = (e) => setCurrentFilter(e.target.value);

  // 날씨를 필터링 후 순서 정렬을 처리할 함수
  const getFilterChange = () => {
    const data = diaryData;
    const filterList = data.filter((diary) =>
      currentFilter === 'all' ? diary : diary.weather === currentFilter
    );
    const sortList = filterList.sort((a, b) => {
      if (currentSort === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return;
        return new Date(a.date) - new Date(b.date);
      }
    });
    return sortList;
  };

  const filterSortList = getFilterChange();

  // diaryData는 현재 날짜에 맞는 다이어리 목록이 저장되어야함.
  // 현재 날짜는 nowDate변수에 저장된 값을 가리킴.
  // newDate변수 값이 변하면 diaryData의 값도 변경.
  // 전체 일기 데이터가 변하면 diaryData의 값도 변경.
  useEffect(() => {
    // 이번달 일기데이터 >= 이번달 1일
    // 이번달 일기데이터 < 다음달 1일
    const thisYear = nowDate.getFullYear();
    const thisMonth = nowDate.getMonth();
    const firstDay = new Date(thisYear, thisMonth, 1);
    const lastDay = new Date(thisYear, thisMonth + 1, 1);
    const filterDiary = diary.filter(
      (diaryDate) =>
        new Date(diaryDate.date) >= firstDay &&
        new Date(diaryDate.date) < lastDay
    );
    setDiarData(filterDiary);
  }, [diary, nowDate]);
  const handleClickPrev = () => {
    // new Date(2051, 2, 25) => 2051년 1월 25일의 날짜 정보
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
  };
  const handleClickNext = () => {
    // new Date(2051, 2, 25) => 2051년 3월 25일의 날짜 정보
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1));
  };
  return (
    <div className="ListPage">
      <Header
        title={nowDate.toLocaleDateString('ko-kr')}
        btnLeft={'이전 달로'}
        btnRight={'다음 달로'}
        handleLeftBtn={handleClickNext}
        handleRightBtn={handleClickPrev}
      />
      <div className="list-top">
        <div className="total">총 {filterSortList.length}개</div>
        <div className="select-wrap">
          <SelectBox
            id="listSort"
            optList={SORT_OPTION_LIST}
            value={currentSort}
            handleChangeSelect={handleChangeSort}
          />
          <SelectBox
            id="listFilter"
            optList={FILTER_OPTION_LIST}
            value={currentFilter}
            handleChangeSelect={handleChangeFilter}
          />
        </div>
      </div>
      <DiaryList diarys={filterSortList} />
      {/* <video muted autoPlay loop>
        <source src="../img/ive_accensio.mp4" type="video/mp4" />
      </video> */}
      <div></div>
    </div>
  );
};

export default ListPage;
