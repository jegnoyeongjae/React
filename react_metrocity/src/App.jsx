import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Header, Footer } from './components/commen';
import { MainPage, SearchPage } from './pages';

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('/data/products.json');
      const data = res.data.products;
      const flattenedProducts = data.flatMap((item) =>
        item.variants.map((variant) => ({
          ...item.model,
          ...variant,
        }))
      );
      setProducts(flattenedProducts);
    } catch (error) {
      console.log('검색결과 로드 실패: ', error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<MainPage />} index />
            <Route
              element={<SearchPage products={products} />}
              path="/search"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const members = [
  { name: 'A', interests: ['sports', 'music'] },
  { name: 'B', interests: ['reading'] },
];

// map → flat 조합
const allInterests1 = members.map((m) => m.interests).flat();
// [['sports', 'music'], ['reading']]
// ['sports','music','reading']

// flatMap 사용
const allInterests2 = members.flatMap((m) => m.interests);
// ['sports','music','reading']
