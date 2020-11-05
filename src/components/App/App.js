import './App.scss';
import Header from '../Header/index';
import FirstScreen from '../FirstScreen/index';
import Advantages from '../Advantages/index';
import Concept from '../concept/index';
import Directions from '../Directions/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstScreen/>
      <Advantages/>
      <Concept/>
      <Directions/>
    </div>
  );
}

export default App;
