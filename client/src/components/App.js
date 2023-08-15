import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

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
        <Route path = '/oktoberfest_tents'>
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
