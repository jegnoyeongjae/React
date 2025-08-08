import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ProductItem } from "../components/products";

import './SearchPage.css';

const SearchPage = ({products}) => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    // 검색 키워드와 일치하는 데이터 (백엔드 연결 시 fetchData()함수에 의해 백엔드에서 바로 수집됨.)
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        filteredData();
    }, [keyword, products])  

    // 백엔드 연결 시 axios로 직접 통신
    const filteredData = () => {
        if(!keyword){
            setFilteredProducts([]);
        } else {
            const filtered = products.filter(product => 
                product.name.includes(keyword) || product.serial.includes(keyword)
            );
            setFilteredProducts(filtered);
        }
    }

    return (
        <div id="SearchPage" className="sub-page-wrapper">
            <h2>검색 결과</h2>
            <div className="top">
                총 {filteredProducts.length}개
            </div>
            {filteredProducts.length === 0
                ? <div className="noResults">검색 결과가 없습니다.</div>
                : <div className="hasResults item-list">                    
                    <ul>
                        {filteredProducts.map(item => 
                            <ProductItem key={item.id} item={item} />
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default SearchPage;