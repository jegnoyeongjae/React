import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";
import { checkIsDone } from "../utils/isDone";

const DetailPage = ({ todos, onRemove, changeIsDone }) => {
    const { id } = useParams();
    const numId = Number(id);
    const navigate = useNavigate();

    const [findData, setFindData] = useState(null);

    useEffect(() => {
        if (todos && todos.length > 0) {
            const sortedData = [...todos].sort(
                (a, b) => new Date(a.startDate) - new Date(b.startDate)
            );
            const current = sortedData.find(item => item.id === numId);
            setFindData(current);
        }
    }, [todos, numId]);

    if (!findData) return <p>데이터 로딩 중...</p>;

    const sortedData = [...todos].sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    const currentIndex = sortedData.findIndex(item => item.id === numId);

    const handleClickPrev = () => {
        if (currentIndex > 0) {
            const prevId = sortedData[currentIndex - 1].id;
            navigate(`/detail/${prevId}`);
        }
    };

    const handleClickNext = () => {
        if (currentIndex < sortedData.length - 1) {
            const nextId = sortedData[currentIndex + 1].id;
            navigate(`/detail/${nextId}`);
        }
    };

    const handleRemoveDiary = () => {
        if (window.confirm("해당 일기를 정말 삭제하시겠습니까?")) {
            onRemove(numId);
            navigate("/list");
        }
    };

    const clickEditBtn = () => {
        navigate(`/edit/${id}`)
    }


    return (
        <div className="DetailPage">
            <div>
                <button onClick={handleClickPrev}>prev</button>
                <button onClick={handleClickNext}>next</button>
            </div>

            <div className="detail-page-content">
                <div className="top">
                    <p>
                        {`글 제목: ${findData.title}`}
                    </p>
                    <p className="date">
                        {`시작일: ${formatDate(findData.startDate)}`}
                    </p>
                    <p className="date">
                        {`종료일: ${formatDate(findData.dueDate)}`}
                    </p>
                    <span>
                        <button onClick={() => changeIsDone(findData.id)}>
                            {`완료여부: ${checkIsDone(findData.isDone)}`}
                        </button>
                    </span>
                </div>
                <div className="content">{`글 내용: ${findData.content}`}</div>
            </div>
            <br />
            <div className="detail-page-btn">
                <button onClick={handleRemoveDiary}>삭제하기</button>
                <br />
                <button onClick={clickEditBtn}>수정하기</button>
                <br />
                <button onClick={() => navigate("/list")}>목록</button>
            </div>
        </div>
    );
};

export default DetailPage;
