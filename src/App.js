import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Install Bootstrap (yarn add bootstrap)

import Nav from './Components/Nav';
import MobileNav from './Components/MobileNav';
import Landing from './Components/Landing';
import Problem from './Components/Problem';
import Benefits from './Components/Benefits';
import Tools from './Components/Tools';
import Reviews from './Components/Reviews';

import purple2 from './Assets/Frames/Purple-2.png';
import purple1 from './Assets/Frames/Purple-1.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <MobileNav/>


        <section id='landing-section' className='position-relative'>
            <Landing/>  
        </section>
        <section id='problem-section' className='position-relative'>
          <Problem/>
        </section>
        <section id='benefits-section' className='position-relative'>
          <Benefits/>
        </section>
        <section id='tools-section' className='position-relative'>
          <img className='top-frame' src={purple2}/>
          <Tools/>
          <img className='bottom-frame flip' src={purple1}/>
        </section>

        <section id='review-section' className='position-relative'>
          
          <Reviews/>
        </section>

      </header>
    </div>
  );
}

export default App;
