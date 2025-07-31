import './App.css';
import { ListPage, CreatePage, EditPage, DetailPage } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { diaryReducer } from './reducer';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage diary={diary} />} />
          <Route path="/new" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/detail/:id" element={<DetailPage diary={diary} />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">홈(listPage)</Link>
            </li>
            <li>
              <Link to="/detail">상세</Link>
            </li>
            <li>
              <Link to="/new">글쓰기</Link>
            </li>
            <li>
              <Link to="/edit">수정</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
