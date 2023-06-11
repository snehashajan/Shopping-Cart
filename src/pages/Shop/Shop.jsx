import React from 'react'
import products from "../../products";
//items = Product
import {Product} from "./Product";

export const Shop = () => {
  return (
    <div className = "shop">
      <div className = "shoptitle">
        <h1>Digital World</h1>
      </div>
      <div className= "products">{products.map((product)=>(
        <Product data ={product}/>
      ))}</div>                  

    </div>
  )
}


