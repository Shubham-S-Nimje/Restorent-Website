import React, {Fragment} from 'react'
import './Header.css'
import meals from '../../Assets/meals.jpg';
import './Header.css'
import Hearcartbutton from './Hearcartbutton';

const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <Hearcartbutton />
      </header>
      <div className='main-image'>
        <img src={meals} alt="mealicon" />
      </div>
    </Fragment>
  );
}

export default Header
