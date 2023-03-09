import Contextdata from './components/Context/Contextdata';
import Header from './components/Layout/Header'

function App() {
  return (
    <Contextdata.Provider value=''>
      <Header/>
    </Contextdata.Provider>
  );
}

export default App;
