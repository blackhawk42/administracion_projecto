import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/token';

//Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="App">
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
                <Route exact path = "/" component = {Login}/>
                <Route exact path = "/dashboard" component = {Dashboard}/>
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </div>
  );
}

export default App;
