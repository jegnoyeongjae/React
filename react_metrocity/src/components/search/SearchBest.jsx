import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductItem from '../products/ProductItem';

const SearchBest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('/data/products.json');
      const data = res.data.products;
      const itemLists = data.flatMap((d) =>
        d.variants.map((variant) => ({
          id: variant.id,
          model_id: d.model.model_id,
          cate_no: d.model.cate_no,
          main_category: d.model.main_category,
          sub_category: d.model.sub_category,
          detail_category: d.model.detail_category,
          name: d.model.name,
          price: d.model.price,
          serial: variant.serial,
          color: variant.color,
          thumbnail: variant.thumbnail,
          stock: variant.stock,
          discount: variant.discount,
          sales_count: variant.sales_count,
          created_at: variant.created_at,
        }))
      );
      const sortedItems = itemLists.sort(
        (a, b) => b.total_sales - a.total_sales
      );
      setItems(sortedItems.slice(0, 4));
    } catch (error) {
      console.log('에러 ', error);
    }
  };

  return (
    <div className="SearchBest">
      <div>
        {items ? (
          items.map((item, idx) => {
            return (
              <div key={idx}>
                <ProductItem />
              </div>
            );
          })
        ) : (
          <div> 화면 출력불가 </div>
        )}
      </div>
    </div>
  );
};

export default SearchBest;
