import './App.scss';
import 'swiper/swiper.scss';
import Header from '../Header/index';
import FirstScreen from '../FirstScreen/index';
import Advantages from '../Advantages/index';
import Concept from '../concept/index';
import Directions from '../Directions/index';
import SecondScreen from '../SecondScreen/index'
import Feedback from '../Feedback/index';
import Partners from '../Partners/index';
function App() {
  return (
    <div className="App">
      <Header/>
      <FirstScreen/>
      <Advantages/>
      <Concept/>
      <Directions/>
      <SecondScreen/>
      <Feedback/>
      <Partners/>
    </div>
  );
}

export default App;
