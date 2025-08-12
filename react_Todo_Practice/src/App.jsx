import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreatePage, DetailPage, EditPage, ListPage } from './pages';
import { useEffect, useReducer, useState } from 'react';
import { diaryReducer } from './reducer/diaryReducer';
import axios from 'axios';
import AppRoute from './router/AppRouter';

function App() {
  const [state, dispatch] = useReducer(diaryReducer, []);

  useEffect(() => {
    init();
    /*
      console.log('useEffectLog: ', state);
      의 결과는 [] 즉 useReducer의 초기값인 빈 배열이다. 왜냐하면 useEffect의 callBack은 
      dom요소가 렌더링 된 이후에 실행 되는데 cosole.log는 렌더링 과정에서 실행 되기
      때문에 useEffect보다 먼저 실행된다. 때문에 init함수 뒤에 있더라도 데이터가
      들어오기 전이라서 빈배열이 출력된다. useEffect밖에서 출력해보면 잘 출력되는 것을 확인 가능.
    
    */
  }, []);

  const init = async () => {
    try {
      const initData = await axios.get('/data/initialDiary.json');
      dispatch({
        type: 'INIT',
        data: initData.data,
      });
    } catch (error) {
      console.error('에러: ', error);
    }
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppRoute />}>
              <Route path="/list" element={<ListPage Data={state} />} />
              <Route path="/newArticle" element={<CreatePage />} />
              <Route path="/edit" element={<EditPage Data={state} />} />
              <Route path="/detail/:id" element={<DetailPage Data={state} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
