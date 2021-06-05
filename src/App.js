import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ModelS from "./components/ModelS/ModelS"
import Model3 from "./components/Model3/Model3"
import ModelX from "./components/ModelX/ModelX"
import ModelY from "./components/ModelY/ModelY"
import Account from "./components/Account/Account"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header>
          </Header>
          <Switch>
              <Route path="/models/ModelS">     
                <ModelS/>
              </Route>
              <Route path="/models/Model3">     
                <Model3/>
              </Route>
              <Route path="/models/ModelX">     
                <ModelX/>
              </Route>
              <Route path="/models/ModelY">     
                <ModelY/>
              </Route>
              <Route path="/Account">
                <Account/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>

       
      </Router>
    </div>
  );
}

export default App;
