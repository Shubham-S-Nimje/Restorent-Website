import React from 'react'
import CartContextdata from './CartContextdata'

const CartProvider = (props) => {

    const addItemToCartHandler = (item) => {
      cartContext.items.push(item)
    };

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items:[],
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

  return (
    <CartContextdata.Provider value={cartContext}>
        {props.children}
    </CartContextdata.Provider>
  )
}

export default CartProvider;
