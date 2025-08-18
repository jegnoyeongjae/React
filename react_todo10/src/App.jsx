import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { MainPage, ListPage, CreatePage, EditPage, DetailPage } from './pages';
import { Header } from './components';
import './App.css';
import axios from 'axios';

const Layout = () => {
    return(
        <div id='wrapper'>
            <Header />
            <Outlet />
        </div>
    )
}

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/diaryData.json');
            const data = response.data;
            setTodos(data);
        } catch (e) {
            console.error('데이터 로딩 실패 : ', e);
        }
    }

    
    // useState의 set함수 : 상태변수값을 변경하려면 반드시 호출해서 사용
    // set함수(새로운 값)
    // set함수(함수-새로운 값을 만들어주는 로직을 묶어둠)
    // set함수(매개변수 => 실행으로 return 처리될 값)
    // set함수(매개변수 => {실행로직; return 새로운 상태변수값})
    // 매개변수는 상태변수의 원래값을 가리킴 

    // 신규데이터 생성 함수
    const onCreatedTodo = (data) => {
        setTodos(prev => [data, ...prev]);
    }

    // 할일 수정 함수 - 누구를 수정할지, 수정내용은 무엇인지를 매개변수로 전달받기
    const onUpdateTodo = (id, data) => {
        setTodos(prev => prev.map(todo => 
            todo.id === id
                ? data
                : todo
        ));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} path='/'>
                    <Route element={<MainPage />} index />
                    <Route element={<ListPage todos={todos} />} path='/list' />
                    <Route element={<CreatePage onCreatedTodo={onCreatedTodo} />} path='/new' />
                    <Route element={<EditPage onUpdateTodo={onUpdateTodo} />} path='/edit/:id' />
                    <Route element={<DetailPage todos={todos} />} path='/detail/:id' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;