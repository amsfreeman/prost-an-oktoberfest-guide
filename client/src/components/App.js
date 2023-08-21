import React, { useEffect, useContext, useState } from "react";
import { Switch, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import TentsList from "./TentsList";
import VisitsList from "./VisitsList";
import NewVisitForm from "./NewVisitForm";
import SingleTentDetail from "./SingleTentDetail";
import { UserContext } from "../context/user";


function App() {
  const [tentsArray, setTentsArray] = useState([])
  const [visitsArray, setVisitsArray] = useState([])
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchTents();
    fetchVisits();
    fetchUser();
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

  const fetchVisits = () => {
    fetch('/oktoberfest_visits')
      .then(r => r.json())
      .then(visits => setVisitsArray(visits))
  }

  function addNewVisit(newVisit) {
    setVisitsArray([...visitsArray, newVisit])
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
        <Route path ='/oktoberfest_visits'>
          <VisitsList visitsArray={visitsArray}/>
        </Route>
        <Route path ='/oktoberfest_add_visit'>
          <NewVisitForm addNewVisit={addNewVisit}/>
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
