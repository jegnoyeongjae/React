import { useEffect, useState } from "react";
import axios from "axios";

import { ProductItem } from "../products";

import './SearchBest.css';

const SearchBest = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await axios.get('/data/products.json');
            const data = response.data.products;
            const itemLists = data.flatMap(d => 
                d.variants.map(variant => ({
                    ...d.model,
                    ...variant,
                    total_sales: d.model.price * (100 - variant.discount) / 100 * variant.sales_count
                }))
            );
            const sortedItems = itemLists.sort((a, b) => b.total_sales - a.total_sales);
            setItems(sortedItems.slice(0, 4));
        } catch(e) {
            console.error('베스트 아이템 데이터 로딩 실패 : ', e);
        }
    }

    return (
        <div className="SearchBest">
            <h3>베스트 상품</h3>
            <ul>
                {items.map(item => 
                    <ProductItem key={item.id} item={item} />
                )}
            </ul>
        </div>
    )
}

export default SearchBest;