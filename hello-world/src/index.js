import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
         <Route exact path='/' component={App}/>
         <Route path='/header' component={Header}/>
      </Switch>
   </ Router >
, document.getElementById('root'));
registerServiceWorker();
