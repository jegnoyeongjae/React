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
        /* 아래 형식으로도 가능 위는 단축 메서드 형식이다.
                                        axios({
                                                method: 'get',
                                                url: '/data/initialDiary.json',
                                                params: {
                                                    id: 1,
                                                },
                                                });

                                        */
        console.log('리스폰스 데이터: ', response.data);
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

  // 리듀서로 관리되는 일기 생성하기;
  const onCreate = (data) => {
    diaryDispatch({
      type: 'CREATE',
      data: {
        id: data.id,
        title: data.title,
        content: data.content,
        weather: data.weather,
        date: data.date,
      },
    });
  };

  // 리듀서로 관리되는 일기 수정하기
  const onUpdate = (targetId, formData) => {
    diaryDispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        title: formData.title,
        date: formData.date,
        weather: formData.weather,
        content: formData.content,
      },
    });
  };

  // 리듀서로 관리되는 일기 삭제하기
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
          <Route
            path="/edit/:id"
            element={<EditPage diarys={diarys} onUpdate={onUpdate} />}
          />
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
