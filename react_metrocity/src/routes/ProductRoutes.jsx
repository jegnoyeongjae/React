import { Routes, Route } from "react-router-dom";
import { ProductList, ProductDetail } from "../pages";

const ProductRoutes = () => {
    return (
        <Routes>
            <Route element={<ProductList />}  path="list" />
            <Route element={<ProductDetail />} path="detail" />
        </Routes>
    )
}

export default ProductRoutes;