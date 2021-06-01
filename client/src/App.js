
import './App.css';

import About from './components/About';
import HowTo from './components/How-to';
// import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';

import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <div className = "Nav">
        <Nav> </Nav>

      </div>
      <div className = "App-body">
        <div className = "how">
          <HowTo></HowTo>
        </div>

        <div >
          <Signup></Signup>
         
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
    </AuthProvider>
  );
}

export default App;
