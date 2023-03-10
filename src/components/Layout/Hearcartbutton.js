import React, { useContext } from 'react'
import CartContextdata from '../../Store/CartContextdata.js'
import CartIcon from '../Cart/Carticon.js'
import './Headercartbutton.css'

const Hearcartbutton = (props) => {

  const cartCtx = useContext(CartContextdata);

  const numberOfCartItems = cartCtx.items.reduce(
    (currentNo, item) => {
    return currentNo + item.amount;
  }, 0);

  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className='badge'>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default Hearcartbutton
