import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Weekly from './Components/Weekly';
import Home from "./Components/Home";

function App() {
  return (
      <div className="App">
        <div className="App-header">
          <Router>
            <Route exact path="/" component={() => <Home/>}/>
            <Route path="/:week" render={({match}) => <Weekly match={match}/>}/>
          </Router>
        </div>
      </div>
  );
}

export default App;
