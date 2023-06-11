import React from 'react'
import {ShoppingCart} from "phosphor-react";
import {Link} from "react-router-dom";
import "./Navbar.css" 

export const Navbar = () => {
  return (
    <div className= "navbar">
      <div className = "links">
      <Link to ="/">SHOP</Link>
      <Link to = "/cart">
        <ShoppingCart size={32}/>
      </Link>
      </div>
    </div>
  )
}


