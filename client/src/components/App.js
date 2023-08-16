import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import TentsList from "./TentsList";
import TentDetail from "./TentDetail"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/oktoberfest_about' >
          <About />
        </Route>
        <Route exact path = '/oktoberfest_tents'>
          <TentsList />
        </Route>
        <Route path = '/oktoberfest_tents/:id'>
          <TentDetail />
        </Route>
        <Route path = '/sign_in'>
          <SignIn />
        </Route>
        <Route path = '/sign_up'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
