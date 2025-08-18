import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoute from './router/AppRouter';
import { CreatePage, DetailPage, EditPage, HomePage, ListPage } from './pages';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data/task_data.json');
      setTodos(response.data);
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      setIsLoaded(false);
    }
  }

  const onCreatedTodo = (data) => {
    setTodos(prev => [data, ...prev]);
  }

  const onUpdateTodo = (id, data) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? data : todo)));
  }

  const onRemove = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const changeIsDone = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index element={<HomePage Data={''} />} />
          <Route path="/list" element={<ListPage todos={todos} />} />
          <Route path="/new" element={<CreatePage onCreatedTodo={onCreatedTodo} />} />
          <Route path="/edit/:id" element={<EditPage todos={todos} onUpdateTodo={onUpdateTodo} />} />
          <Route path="/detail/:id" element={
            isLoaded ? <DetailPage todos={todos} onRemove={onRemove} changeIsDone={changeIsDone} /> : <p>데이터 로딩 중...</p>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
