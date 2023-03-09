import React from 'react'
import CartIcon from '../Cart/Carticon.js'
import './Headercartbutton.css'

const Hearcartbutton = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className='badge'>
            3
        </span>
    </button>
  )
}

export default Hearcartbutton
