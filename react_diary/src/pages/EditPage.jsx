import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/commen";
import { DiaryEdit } from "../components/diary";

const EditPage = ({diarys, onUpdate}) => {
    const navigete = useNavigate();

    const {id} = useParams();
    const numericId = Number(id);

    const [diary, setDiary] = useState({});

    useEffect(()=>{
        fetchData(diarys);
    }, [id]);

    const fetchData = data => {
        const found = data.find(item => item.id === numericId);
        setDiary(found);
    }

    const handleClickBack = () => {
        navigete(-1);
    }

    return(
        <div className="EditPage">
            <Header 
                title={'수정 페이지'} 
                btnLeft={'이전 페이지로 이동'} 
                handleLeftBtn={handleClickBack}
            />
            <DiaryEdit isEdit={true} diary={diary} onUpdate={onUpdate} />
        </div>
    )
}

export default EditPage;