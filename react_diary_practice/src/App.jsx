import './App.css';
import ListPage from './pages/ListPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { diaryReducer } from './reducer/diaryReducer';

function App() {
  const [diary, diaryDispatch] = useReducer(diaryReducer, []);
  useEffect(() => {
    const dataLoading = async () => {
      try {
        const response = await axios.get('/data/initialDiary.json');
        diaryDispatch({
          type: 'INIT',
          data: response.data,
        });
      } catch (error) {
        console.log('데이터 로딩 실패: ', error);
      }
    };
    dataLoading();
  }, []);

  return (
    <div>
      <ListPage diary={diary} />
    </div>
  );
}

export default App;
