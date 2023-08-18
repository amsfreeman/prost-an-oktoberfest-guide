import React, { useEffect, useContext, useState } from "react";
import { Switch, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import TentsList from "./TentsList";
import SingleTentDetail from "./SingleTentDetail";
import { UserContext } from "../context/user";


function App() {
  const [tentsArray, setTentsArray] = useState([])
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchTents();
    fetchUser()
  }, [])

  const fetchTents = () => {
    fetch('/oktoberfest_tents')
      .then(r => r.json())
      .then(tents => setTentsArray(tents))
  }

  const fetchUser = () => {
    fetch("/authorized")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
  }  

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/oktoberfest_about' >
          <About />
        </Route>
        <Route exact path = '/oktoberfest_tents'>
          <TentsList tentsArray={tentsArray}/>
        </Route>
        <Route path ='/oktoberfest_tents/:id'>
          <SingleTentDetail />
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
