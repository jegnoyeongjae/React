import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Header, Footer } from './components/commen';
import { MainPage, SearchPage } from './pages';
import {
  SearchBest,
  SearchFrom,
  SearchKeyword,
  SearchModal,
} from './components/search';

import './App.css';

const Layout = () => {
  return (
    <div id="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<MainPage />} index />
            <Route element={<SearchPage />} path="/search" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
