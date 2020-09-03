import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import './style.css';

function App() {
  return (
    <>
    <Router>
     
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Directory' component={Directory}/>
      <Route exact path='/AddUser' component={AddUser}/>
      <Route exact path='/Contact' component={Contact}/>
   
    </Router>
    </>
  );
}

export default App;