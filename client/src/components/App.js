import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import TentsList from "./TentsList";
import TentDetail from "./TentDetail";
import { UserProvider } from "../context/user";
import { UserContext } from "../context/user";


function App() {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchUser();
}, [])

  const fetchUser = () => {
    fetch('/authoized')
      .then((r) => {
        if (r.ok) {
          r.json()
          .then((user) => setUser(user))
        }
      })
  }



  return (
    <div className="App">
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default App;
