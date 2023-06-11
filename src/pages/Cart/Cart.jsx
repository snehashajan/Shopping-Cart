import React, {useContext} from 'react'
import products from "../../products";
import {ShopContext} from "../../context/shop-context";
import {Cartitem} from "./Cartitem";
import { useNavigate } from 'react-router-dom';
import "./cart.css"

export const Cart = () => {

  const {cartitems, getTotalcartamount} = useContext(ShopContext);
  const totalamount = getTotalcartamount();

  const navigate = useNavigate();
  return (
    <div className = 'cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className = "cart">
         {products.map((product) =>{
          if(cartitems[product.id] !== 0){
            return <Cartitem data = {product} />;
          }
         })}
      </div>
      {totalamount > 0 ? (
      <div className = "checkout">
        <p>Subtotal : ${totalamount}</p>
        <button onClick = {() =>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ) : (
      <p>Your cart is empty</p>
      )}
    </div>
  );
};


