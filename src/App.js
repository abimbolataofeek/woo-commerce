import Navigation from './Components/Navigation/Navigation';
import Homepage from './Components/Homepage/Homepage';
import Commerce from './Components/Commerce/Commerce';
import Develop from './Components/Develop/Develop';
import Trusted from './Components/Trusted/Trusted';
import Supported from './Components/Supported/Supported';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className='App'>
      <div class="container-style">
      <Navigation />
      <Homepage />
      </div>
      <Commerce />
      {/* <Develop /> */}
      {/* <Trusted /> */}
      {/* <Supported/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
