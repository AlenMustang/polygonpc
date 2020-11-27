import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Section from "./pages/section"
import home from './pages/homepage/home';


function App() {
  return (
    <Router>
      <Navbar className="Navbar"/>
      <Switch>
        <Route path="/" exact component={home}/>
      </Switch>
      
      
    </Router>
  );
}

export default App;
