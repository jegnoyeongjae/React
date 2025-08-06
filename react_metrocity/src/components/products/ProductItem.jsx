import './ProductItem.css';
import { formattedPrice } from '../../utills';
import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => {
  const salePrice = (item.price * (100 - item.discount)) / 100;
  const formattedSalePrice = formattedPrice(salePrice);
  const formattedOriginalPrice = formattedPrice(item.price);

  return (
    <li className="ProductItem">
      <Link to={''}>
        <p className="thumbnail">
          <img src={item.thumbnail[0]} />
        </p>
        <p className="name">
          {item.name}
          {item.serial}
        </p>
        <div className="price">
          {item.discount > 0 && <p className="discount">{item.discount}%</p>}
          <p className="sale-price">
            {formattedSalePrice.symbol}
            {formattedSalePrice.number}
          </p>
          {item.discount > 0 && (
            <p className="original-price">
              {formattedOriginalPrice.symbol}
              {formattedOriginalPrice.number}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
