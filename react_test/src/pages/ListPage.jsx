import { useEffect, useState } from "react";
import { TastItem } from "../components";
import { filterAndSortByMonth } from "../utils/dateSortFormatter";

const ListPage = ({ todos }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [todoData, setTodoData] = useState([]);
    const [sortByDone, setSortByDone] = useState(false);

    const prevMonth = () => {
        const prev = new Date(currentDate);
        prev.setMonth(prev.getMonth() - 1);
        setCurrentDate(prev);
    };

    const nextMonth = () => {
        const next = new Date(currentDate);
        next.setMonth(next.getMonth() + 1);
        setCurrentDate(next);
    };

    const cIsDone = () => {
        setSortByDone(prev => !prev);
    };

    const btnTodayData = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const filteredToday = todos.filter(todo => {
            const todoStartDate = todo.startDate.split('T')[0]; // 시간 제거
            return todoStartDate === todayStr;
        });

        // 완료 여부 정렬이 활성화되어 있으면 적용
        if (sortByDone) {
            filteredToday.sort((a, b) => {
                if (a.isDone === b.isDone) return new Date(a.startDate) - new Date(b.startDate);
                return a.isDone ? -1 : 1;
            });
        }

        setTodoData(filteredToday);
    };





    useEffect(() => {
        let filtered = filterAndSortByMonth(todos, currentDate);

        if (sortByDone) {
            filtered = filtered.sort((a, b) => {
                if (a.isDone === b.isDone) return new Date(a.startDate) - new Date(b.startDate);
                return a.isDone ? -1 : 1;
            });
        }

        setTodoData(filtered);
    }, [todos, currentDate, sortByDone]);

    return (
        <div className="ListPage">
            <h3>
                {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </h3>
            <div>
                <button onClick={prevMonth}>◀ 이전달</button>
                <button onClick={nextMonth}>다음달 ▶</button>
                <button onClick={cIsDone}>완료여부 정렬</button>
                <button onClick={btnTodayData}>오늘데이터만 출력</button>
            </div>
            <div>
                총 할일 개수: {todoData.length}
            </div>
            <ul>
                {todoData.map((todo, idx) => (
                    <TastItem key={todo.id} todo={todo} index={idx} />
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
