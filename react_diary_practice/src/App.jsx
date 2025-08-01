import { useState, useEffect } from 'react';
import axios from 'axios';
import ListPage from './pages/ListPage';
import './App.css';

const App = () => {
    const [diarys, setDiarys] = useState([]);

    useEffect(()=>{
        // 데이터 패치 함수 호출 = 실행
        dataLoading();
    }, []);

    // 데이터 패치 함수를 정의
    const dataLoading = async () => {
        try{
            const res = await axios.get('/data/initialDiary.json');
            setDiarys(res.data);
        } catch(e) {
            console.error('데이터 패치 에러 : ', e);
        }
    }

    return (
        <>
            <ListPage diarys={diarys} />
        </>
    )
}

export default App;