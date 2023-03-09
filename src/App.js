import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Contextdata from './components/Context/Contextdata';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };

  const hideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <Contextdata.Provider value=''>
      {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </Contextdata.Provider>
  );
}

export default App;
