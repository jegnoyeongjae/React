import { useEffect, useReducer, useState } from 'react'; // 순서적으로 react, router, pageComponent, css순으로 작성하는것이 유리함. 당장은 실행에 문제가 없으나 추후에 에러가 발생하는 원인이 될 수 있음.
import { Routes, Route } from 'react-router-dom';
import {
  ListPage,
  CreatePage,
  DetailPage,
  EditPage,
  Home,
} from './pages/ListPage';
import './App.css';
import axios from 'axios';

function App() {
  const [diaryData, setDiaryData] = useReducer();
  const [dataIsOk, setDataIsOk] = useState(false);

  useEffect(() => {
    const loading = async () => {
      try {
        const res = await axios.get('/data/initialDiary.json');
      } catch (error) {}
    };
    loading();
  });

  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/new" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowerRouter>
    </>
  );
}

export default App;
