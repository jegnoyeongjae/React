import { useState } from "react";
import { DiaryList } from "../components";

const ListPage = ({diarys}) => {
    const [currentSort, setCurrentSort] = useState('latest');
    const [currentFilter, setCurrentFilter] = useState('all');

    const handleChangeSort = e => setCurrentSort(e.target.value);
    const handleChangeFilter = e => setCurrentFilter(e.target.value);

    const getFilterSortChange = () => {
        const filterList = diarys.filter(diray =>
            currentFilter === 'all'
                ? diray
                : diray.weather === currentFilter
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

    const filterSortList = getFilterSortChange();

    return (
        <div className="ListPage">
            <h2>다이어리 목록 페이지</h2>
            <div>
                <select id="sortList" value={currentSort} onChange={handleChangeSort}>
                    <option value='latest'>최신 순</option>
                    <option value='oldest'>오래된 순</option>
                </select>
            </div>
            <div>
                <select id="filterList" value={currentFilter} onChange={handleChangeFilter}>
                    <option value='all'>전체</option>
                    <option value='sunny'>맑음</option>
                    <option value='cloudy'>흐림</option>
                    <option value='rainny'>비</option>
                </select>
            </div>
            <DiaryList diarys={filterSortList} />
        </div>
    )
}

export default ListPage;




// 배열.sort((a, b) => a - b)   오름차순, 낮은 수에서 큰 수로, 옛날에서 최신으로
// 배열.sort((a, b) => b - a)   내림차순, 큰 수에서 작은 수로, 최신에서 옛날로