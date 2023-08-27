import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Install Bootstrap (yarn add bootstrap)

import Landing from './Components/Landing';
import Problem from './Components/Problem';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <section id='landing-section'>
            <Landing/>  
        </section>
        <section id='problem-section'>
          <Problem/>
        </section>

      </header>
    </div>
  );
}

export default App;
