import React from 'react'
import './Mealitem.css'

const Mealitem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='meal'>
        <div>
            <h1>{props.name}</h1>
            <div className='description'>
                {props.description}</div>
            <div className='price'>
                {price}</div>
        </div>
        <div></div>
      
    </li>
  )
}

export default Mealitem