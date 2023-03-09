import Contextdata from './components/Context/Contextdata';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Contextdata.Provider value=''>
      <Header/>
      <main>
      <Meals/>
      </main>
    </Contextdata.Provider>
  );
}

export default App;
