import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* <Wrapper> */}
          {/* <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
 
          </Switch> */}
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}

export default App;