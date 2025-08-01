// 백엔드가 붙었을 때

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Header } from "../components/commen";

import { WEATHER_ICONS } from "../constants";
import { formatTextWithBr } from "../utills";

const DetailPage2 = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const numId = Number(id);

    const [diary, setDiary] = useState({});

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        const response = await axios.get(`/detail/:${id}`);
        const found = response.data.find(item => item.id === numId);
        setDiary(found);
    }    
    
    const handleGoList = () => {
        navigate('/');
    }

    const handleGoEdit = () => {
        navigate(`/edit/${id}`);
    }

    const handleRemoveDiary = async () => {
        try{
            const response = await axios.delete(`/detail/${id}`);
            navigate('/');
        } catch(e){
            console.error('일기 삭제 오류 : ', e);
        }
    }

    const lines = formatTextWithBr(diary.content);
    
    return(
        <div className="DetailPage">
            <Header 
                title={diary.title} 
                btnLeft={'목록 페이지로 이동'} 
                handleLeftBtn={handleGoList}
            />
            <div className="detail-page-content">
                <div className="top">
                    <p className="date">{diary.date}</p>
                    <p className="weather">{WEATHER_ICONS[diary.weather]}</p>
                </div>
                <div className="content">
                    {lines.map((line, idx) => 
                        <p key={idx}>
                            {line}
                        </p>
                    )}
                </div>
            </div>
            <div className="detail-page-btn">
                <button onClick={handleRemoveDiary}>삭제하기</button>
                <button onClick={handleGoEdit}>수정하기</button>
            </div>
        </div>
    )
}

export default DetailPage2;