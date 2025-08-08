import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ProductItem } from "../components/products";

import './ProductList.css';

const ProductList = () => {
    // const [변수, set함수] = useSearchParams()
    const [searchParams] = useSearchParams();
    const mainCate = searchParams.get('main_cate');
    const subCate = searchParams.get('sub_cate');
    const detailCate = searchParams.get('detail_cate');

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [mainCate, subCate, detailCate]);

    const fetchData = async () => {
        try{
            const response = await axios.get('/data/products.json');
            const data = response.data.products;
            const filteredProducts = data.flatMap(product => {
                const { main_category, sub_category, detail_category } = product.model;
                if(
                    (!mainCate || mainCate === main_category) &&
                    (!subCate || subCate === sub_category) &&
                    (!detailCate || detailCate === detail_category)
                ){
                    return product.variants.map(variant => ({
                        ...product.model,
                        ...variant
                    }))
                }
                return [];
            });
            setProducts(filteredProducts);
        } catch(e){
            console.error('상품 리스트 데이터 로딩 실패 : ', e);
        }
    }

    return (
        <div id="ProductList" className="sub-page-wrapper">
            <h2>상품리스트 페이지</h2>
            총 개수 
            최신순, 인기순, 낮은 가격순, 높은 가격순
            <div className="item-list">
                <ul>
                    {products.map(product => <ProductItem key={product.id} item={product} />)}
                </ul>
            </div>
        </div>
    )
}

export default ProductList;