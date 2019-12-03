import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <Router>
     <Switch>
        <Route path="/">
          <Home />
        </Route>  
        <Route path="/about">
          <About />
        </Route>
          
           
     </Switch>
    </Router>
  );
}