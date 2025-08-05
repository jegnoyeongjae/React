import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/commen";
import { DiaryList } from "../components/diary";
import { SelectBox } from "../components/feature";

import './ListPage.css';

const SORT_OPTION_LIST = [
    { value : 'latest', name: '최신 순'},
    { value : 'oldest', name: '오래된 순'}
];

const FILTER_OPTION_LIST = [
    { value : 'all', name: '전체'},
    { value : 'sunny', name: '맑음'},
    { value : 'cloudy', name: '흐림'},
    { value : 'rainny', name: '비'}
];

const ListPage = ({diarys}) => {
    const [nowDate, setNowDate] = useState(new Date());
    const [diaryData, setDiaryData] = useState([]);

    const [currentSort, setCurrentSort] = useState(SORT_OPTION_LIST[0].value);
    const [currentFilter, setCurrentFilter] = useState(FILTER_OPTION_LIST[0].value);

    useEffect(() => {
        const thisYear = nowDate.getFullYear();
        const thisMonth = nowDate.getMonth();
        const firstDay = new Date(thisYear, thisMonth, 1);
        const lastDay = new Date(thisYear, thisMonth + 1, 1);
        const filterDiary = diarys.filter(diary => 
            new Date(diary.date) >= firstDay && new Date(diary.date) < lastDay
        );
        setDiaryData(filterDiary);
    }, [diarys, nowDate]);

    // new Date(2051, 2, 25) => 2051년 3월 25일의 날짜 정보
    const handleClickPrev = () => {        
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1));
    }

    const handleClickNext = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1));
    }

    const handleChangeSort = e => setCurrentSort(e.target.value);
    const handleChangeFilter = e => setCurrentFilter(e.target.value);

    // 날씨 필터링 처리하고, 순서 정렬을 처리할 함수
    const getFilterChange = () => {
        const data = diaryData;
        const filterList = data.filter(diary => 
            currentFilter === 'all'
                ? diary
                : diary.weather === currentFilter
        );
        const sortList = filterList.sort((a, b) => {
            if(currentSort === 'latest') {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        });
        return sortList;
    }

    const filterSortList = getFilterChange();

    return(
        <div className="ListPage">
            <Header 
                title={nowDate.toLocaleDateString('ko-Kr')} 
                btnLeft={'이전 달로'}
                btnRight={'다음 달로'}
                handleLeftBtn={handleClickPrev}
                handleRightBtn={handleClickNext}
            />
            <div className="list-top">
                <div className="total">총 {filterSortList.length}개</div>
                <div className="select-wrap">
                    <SelectBox 
                        id='listSort'
                        optList={SORT_OPTION_LIST} 
                        value={currentSort}
                        handleChangeSelect={handleChangeSort}
                    />
                    <SelectBox 
                        id='listFilter'                    
                        optList={FILTER_OPTION_LIST} 
                        value={currentFilter}
                        handleChangeSelect={handleChangeFilter}
                    />
                </div>
            </div>
            <DiaryList diarys={filterSortList} />
            <div className="btn-go-create">
                <Link to="/new">새글<br />쓰기</Link>
            </div>
        </div>
    )
}

export default ListPage;