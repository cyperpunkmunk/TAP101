
import './App.css';

import About from './components/About';
import HowTo from './components/How-to';
import Login from './components/Login';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <div className = "Nav">
        <Nav> </Nav>

      </div>
      <div className = "App-body">
        <div className = "how">
          <HowTo></HowTo>
        </div>

        <div >
          <Login></Login>
         
        </div>
      </div>
      <div className="App-header">
        
        <About></About> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  );
}

export default App;
