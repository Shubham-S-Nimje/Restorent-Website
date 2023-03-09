import Contextdata from './components/Context/Contextdata';
import Header from './components/Layout/Header'
import Mealsummery from './components/Meals/Mealsummery';

function App() {
  return (
    <Contextdata.Provider value=''>
      <Header/>
      <Mealsummery/>
    </Contextdata.Provider>
  );
}

export default App;
