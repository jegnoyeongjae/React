import DiaryItem from "./DiaryItem";

const DiaryList = ({diarys}) => {

    return (
        <div className="DiaryList">
            {diarys.map(diary => 
                <DiaryItem key={diary.id} diary={diary} />
            )}
        </div>
    )
}

export default DiaryList;