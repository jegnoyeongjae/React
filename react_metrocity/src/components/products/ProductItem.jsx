import { Link } from 'react-router-dom';
import { formattedPrice } from '../../utills';

import './ProductItem.css';

const ProductItem = ({item}) => {
    const salePrice = item.price * (100 - item.discount) / 100;
    const formattedSalePrice = formattedPrice(salePrice);
    const formattedOriginalPrice = formattedPrice(item.price);

    return(
        <li className="ProductItem">
            <Link to="">
                <p className="thumbnail">
                    <img src={item.thumbnail[0]} />
                </p>
                <p className="name">
                    {item.name}
                    {item.serial}
                </p>
                <div className="price">
                    {(item.discount > 0) &&                 
                        <p className="discount">
                            {item.discount}%
                        </p>
                    }
                    <p className="sale-price">
                        <span className="symbol">{formattedSalePrice.symbol}</span>
                        <span className="number">{formattedSalePrice.number}</span>
                    </p>
                    {(item.discount > 0) && 
                        <p className="original-price">
                            <span className="symbol">{formattedOriginalPrice.symbol}</span>
                            <span className="number">{formattedOriginalPrice.number}</span>
                        </p>
                    }
                </div>
            </Link>
        </li>
    )
}

export default ProductItem;