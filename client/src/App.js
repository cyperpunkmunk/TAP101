
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <div classNAme = "Nav">
        <Nav> </Nav>

      </div>
      <div className = "App-body">
        <div className = "how">

        </div>

        <div className = "user">
          <Signup></Signup>
        </div>
      </div>
      <div className="App-header">
        
        < About ></About> 
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
