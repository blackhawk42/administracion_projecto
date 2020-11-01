import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/dashboard" component = {Dashboard}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
