import React, { useContext } from 'react'
import "./Shop.css"
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {

  const{addtocart , cartitems} = useContext(ShopContext);
  const { id, name, price, image } = props.data;

  const cartitemamount = cartitems[id]
    return (
    <div>
      <div className = "product">
        <>{image}</>
        <div className = "description">
        <p>
        <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className = "addToCartBttn" onClick= {()=>addtocart(id)}> 
      Add to Cart { cartitemamount > 0 && <>({cartitemamount})</>}
      </button>
      </div>
    </div>
  );
};
