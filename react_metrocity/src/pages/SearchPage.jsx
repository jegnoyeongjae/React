import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductItem } from '../components/products';
import './SearchPage.css';

const SearchPage = ({ products }) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  //const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('/data/products.json');
  //       const data = res.data.products;
  //       const flattenedProducts = data.flatMap((item) =>
  //         item.variants.map((variant) => ({
  //           ...item.model,
  //           ...variant,
  //         }))
  //       );
  //       setProducts(flattenedProducts);
  //     } catch (error) {
  //       console.log('검색결과 로드 실패: ', error);
  //     }
  //   };

  useEffect(() => {
    filteredData();
  }, [keyword, products]);

  // 백엔드 연결 시 axios로 직접 통신
  const filteredData = async () => {
    if (!keyword) {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.includes(keyword) || product.serial.includes(keyword)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div id="SearchPage">
      <h2>검색결과</h2>
      <span className="resultTotal">{`총 검색결과: ${filteredProducts.length}`}</span>
      <div>
        {filteredProducts.length === 0 ? (
          <div className="noResult">검색 결과가 없습니다.</div>
        ) : (
          <ul className="hasResult">
            {filteredProducts.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
