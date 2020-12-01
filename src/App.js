import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import about from "./pages/about"
import home from './pages/homepage/home';
import Footer from "./pages/footer"

function App() {
  return (<>
    <Router>
      <Navbar className="Navbar"/>
      <Switch>
        <Route path="/" exact component={home}/>
        
      </Switch>
      <Footer></Footer>
     
    </Router>
    
    </>
  );
}

export default App;
