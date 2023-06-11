import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
//import "./cart.css";

export const Cartitem = (props) => {
    
  const { id, name, price, image} = props.data;
    const{addtocart , cartitems , removefromcart, updatecartitemcount} = useContext(ShopContext);
 
    return (
    <div className = "cartItem">
      <>{image}</>
      <div className = "description">
        <p>
            <b>{name}</b>
        </p>
        <p>${price}</p>
        <div className = "countHandler">
            <button onClick={() => removefromcart(id)}>-</button>
            <input value = {cartitems[id]} onChange = {(e)=> updatecartitemcount(Number(e.target.value),(id))}/>
            <button onClick={() => addtocart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}


