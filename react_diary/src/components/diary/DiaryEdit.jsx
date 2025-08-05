import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { WeatherItem } from "../feature";
import { WEATHER_LIST } from "../../constants";

import "./DiaryEdit.css";

const DiaryEdit = ({isEdit, diary, onUpdate, onCreate}) => {
    const navigate = useNavigate();

    const todayString = new Date().toISOString().slice(0, 10);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(todayString);
    const [weather, setWeather] = useState('sunny');
    const [content, setContent] = useState('');

    const titleInputRef = useRef();
    const titleNotiRef = useRef();
    const contentInpuRef = useRef();
    const contentNotiRef = useRef();

    useEffect(()=>{
        if(isEdit && diary.id){
            setTitle(diary.title ?? '');
            setDate(diary.date ?? todayString);
            setWeather(diary.weather ?? 'sunny');
            setContent(diary.content ?? '');
        }
    }, [isEdit, diary]);

    const handleChangeTitle = e => {
        titleNotiRef.current.style.display = 'none';
        setTitle(e.target.value);
    }
    const handleChangeDate = e => setDate(e.target.value);
    const handleCickWeather = state => setWeather(state);
    const handleChangeContent = e => {
        contentNotiRef.current.style.display = 'none';
        setContent(e.target.value);
    }

    const handleClickCancle = () => {
        if(confirm('작성을 취소하시겠습니까?')){
            navigate(-1);
        }
    }


    const handleClickSubmit = () => {
        if(!title.trim() && !content.trim()){
            titleNotiRef.current.style.display = 'block';
            contentNotiRef.current.style.display = 'block';
            titleInputRef.current.focus();
            return;
        } else if(!title.trim()){
            titleNotiRef.current.style.display = 'block';
            titleInputRef.current.focus();
            return;
        } else if(!content.trim()){
            contentNotiRef.current.style.display = 'block';
            contentInpuRef.current.focus();
            return;
        }

        const id = isEdit && diary.id ? diary.id : new Date().getTime();
        const formData = {
            id,
            title,
            date,
            weather,
            content
        }

        if(isEdit){
            onUpdate(id, formData);
            navigate(`/detail/${id}`);
        } else {
            onCreate(formData);
            navigate('/');
        }        
    }

    return(
        <div className="DiaryEdit">
            <div className="title">
                <h3>제목</h3>
                <p>
                    <input 
                        type="text" 
                        placeholder="제목을 입력해주세요." 
                        name="diaryTitle" 
                        id="diaryTitle"
                        value={title}
                        onChange={handleChangeTitle}
                        ref={titleInputRef}
                    />
                </p>
                <p className="noti" ref={titleNotiRef}>
                    제목을 반드시 입력해주세요.
                </p>
            </div>
            <div className="date">
                <h3>날짜</h3>
                <p>
                    <input 
                        type="date"                     
                        name="diaryTitle" 
                        id="diaryitle"
                        value={date}
                        onChange={handleChangeDate}
                    />
                </p>
            </div>
            <div className="weather">
                <h3>날씨</h3>
                <ul>
                    {WEATHER_LIST.map((item, idx) => 
                        <WeatherItem 
                            key={idx} 
                            item={item} 
                            handleClick={handleCickWeather}
                            isActive={item.value === weather}
                        />
                    )}
                </ul>
            </div>            
            <div className="content">
                <h3>내용</h3>
                <p>
                    <textarea 
                        name="diaryContent" 
                        id="diaryContent"
                        value={content}
                        onChange={handleChangeContent}
                        ref={contentInpuRef}
                    ></textarea>
                </p>
                <p className="noti" ref={contentNotiRef}>
                    내용을 반드시 입력해주세요.
                </p>
            </div>
            <div className="processBtn">
                <button onClick={handleClickCancle}>
                    취소하기
                </button>
                <button 
                    className="btn-primary"
                    onClick={handleClickSubmit}
                >
                    저장하기
                </button>
            </div>
        </div>
    )
}

export default DiaryEdit;