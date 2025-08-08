import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import axios from "axios";

import { ProductRoutes } from "./routes";

import { Header, Footer } from "./components/commen";
import { MainPage, SearchPage } from "./pages";

import "./App.css";

const Layout = () => {
    return (
        <div id="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const App = () => {
    // 전체 상품 데이터 (백엔드 연결 시 X)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/products.json');
            const data = response.data.products;
            const flattenedProducts = data.flatMap(item =>
                item.variants.map(variant => (
                    {
                        ...item.model,
                        ...variant
                    }
                ))
            );
            setProducts(flattenedProducts);
        } catch (e) {
            console.error('상품 데이터 로딩 실패 : ', e);
        }
    }
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} path="/">
                        <Route element={<MainPage />} index />
                        <Route element={<SearchPage products={products} />} path="/search" />
                        <Route element={<ProductRoutes />} path="/product/*" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;