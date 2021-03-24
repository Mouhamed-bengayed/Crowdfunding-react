import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from "react-router-dom";
import './index.css';
import App from "./App";
import Pageconnexion from './Pageconnexion';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact component={App}/>
        <Route path="/pageconnexion" Component={Pageconnexion} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

