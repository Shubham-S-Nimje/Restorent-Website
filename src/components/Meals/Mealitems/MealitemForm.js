import React, { useContext } from 'react'
import CartContextdata from '../../../Store/CartContextdata';
import Input from '../../UI/Input'
import './MealitemForm.css'

const MealitemForm = (props) => {

  const cartctx = useContext(CartContextdata)
  console.log('reinitialize cartctx',cartctx)
  const AddtocartHandler = (event) => {
    event.preventDefault();

    cartctx.items.push(props.item)
    console.log('item added to cart',cartctx);
  };

  return (
    <form className='form'>
      {console.log('inside render cartctx.items',cartctx.items)}
      <Input
      label='Amount'
      input={{
        id:'Amount_' + props.id,
        type: 'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button onClick={AddtocartHandler}>+ Add</button>
    </form>
  )
}

export default MealitemForm;
