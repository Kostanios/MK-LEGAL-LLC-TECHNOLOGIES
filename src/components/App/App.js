import './App.scss';
import 'swiper/swiper.scss';
import Header from '../Header/index';
import FirstScreen from '../FirstScreen/index';
import Advantages from '../Advantages/index';
import Concept from '../Concept/index';
import Directions from '../Directions/index';
import SecondScreen from '../SecondScreen/index'
import Feedback from '../Feedback/index';
import Partners from '../Partners/index';
import Guarantees from '../Guarantees/index';
import Services from '../Services/index';
import Confidence from '../Сonfidence/index';
import Skill from '../Skill/index';
import Cooperation from '../Сooperation/index';
import Footer from '../Footer';

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
      <Guarantees/>
      <img className='delimiter' src='delimiter.png'/>
      <Services/>
      <Confidence/>
      <Skill/>
      <Cooperation/>
      <div className='line'></div>
      <Footer/>
    </div>
  );
}

export default App;
