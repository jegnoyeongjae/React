import { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { ListPage, CreatePage, EditPage, DetailPage } from './pages';
import { diaryReducer } from './reducer';

import './App.css';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [diarys, diaryDispatch] = useReducer(diaryReducer, []);

  useEffect(() => {
    const dataLoading = async () => {
      try {
        const response = await axios.get('/data/initialDiary.json');
        diaryDispatch({
          type: 'INIT',
          data: response.data,
        });
      } catch (error) {
        console.error('초기데이터 로딩 실패 : ', error);
      } finally {
        // try 블록과 상관없이 무조건 실행이 보장되어야 하는 코드를 작성
        setIsReady(true);
      }
    };
    dataLoading();
  }, []);

  // 일기 생성하기
  const onCreate = (data) => {
    diaryDispatch({
      type: 'CREATE',
      data: {
        id: new Date().getTime(),
        title: data.title,
        content: data.content,
        weather: data.weather,
        date: data.date,
      },
    });
  };

  // 리듀서로 관리 되는 일기 삭제하기
  const onRemove = (targetId) => {
    diaryDispatch({
      type: 'REMOVE',
      targetId,
    });
  };

  if (!isReady) {
    return <div>데이터 로딩 중...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage diarys={diarys} />} />
          <Route path="/new" element={<CreatePage onCreate={onCreate} />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route
            path="/detail/:id"
            element={<DetailPage diarys={diarys} onRemove={onRemove} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
