import { createContext, useState } from "react";
import products from "../products";

export const ShopContext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartitems, setcartitems] = useState(getdefaultcart());

  const getTotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = products.find((product) => product.id === (item));
        totalamount += cartitems[item] * iteminfo.price;
      }
    }
    return totalamount;
  };

  const addtocart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removefromcart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const updatecartitemcount = (newamount, itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: newamount }));
  };


  const contextValue = {
    cartitems,
    addtocart,
    updatecartitemcount,
    removefromcart,
    getTotalcartamount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};