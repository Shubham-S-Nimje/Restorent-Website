import React, { useReducer } from 'react'
import CartContextdata from './CartContextdata'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
    // const updateditems = state.items.concat(action.item);
    
  if(action.type === 'ADD') {

    const exsistingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id);
      
      const existingcartitem = state.items[exsistingCartItemsIndex]
      let updatedItems;

      if(existingcartitem) {
        const updatedItem = {
          ...existingcartitem,
          amount: existingcartitem.amount + action.item.amount
        }

        updatedItems = [...state.items];
        updatedItems[exsistingCartItemsIndex] = updatedItem;
      }
      else {
        updatedItems = state.items.concat(action.item);
      }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    }
  }

  if(action.type === 'REMOVE'){
    const exsistingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingcartitem = state.items[exsistingCartItemsIndex];
    const updatedtotalAmount = state.totalAmount - existingcartitem.price;

    let updatedItems;
    if(existingcartitem.amount === 1)
    {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }
    else {
      const updatedItem = {...existingcartitem, amount: existingcartitem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[exsistingCartItemsIndex] = updatedItem;
    }

    return {
      items : updatedItems,
      totalAmount: updatedtotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
      dispatchCartAction({
        type:'ADD',
        item: item
      });
    };

    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({
        type:'REMOVE',
        id: id
      });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
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
