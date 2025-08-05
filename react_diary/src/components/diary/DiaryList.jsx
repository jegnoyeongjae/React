import { DiaryItem } from './index';

const DiaryList = ({diarys}) => {
    return(
        <div className="DiaryList">
            <ul>
                {diarys.map(diary => 
                    <DiaryItem key={diary.id} diary={diary} />
                )}
            </ul>
        </div>
    )
}

export default DiaryList;