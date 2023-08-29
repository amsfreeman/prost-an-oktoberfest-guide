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
import SearchAndSort from "./SearchAndSort";
import { UserContext } from "../context/user";


function App() {
  const [visitsArray, setVisitsArray] = useState([])
  const { setUser } = useContext(UserContext);
  const [ tents, setTents ] = useState([]);
  const [ searchKeyword, setSearchKeyword ] = useState('');
  const [ filteredVisits, setFilteredVisits ] = useState([]);
  const [ sortOrder, setSortOrder ] = useState('id');

  const handleVisitDelete = (deletedVisitId) => {
    setFilteredVisits(prevVisits => prevVisits.filter(visit => visit.id !== deletedVisitId))
  }

  useEffect(() => {
    fetch('/tents_and_visits') 
      .then((r) => r.json())
      .then((data) => {
        setTents(data.tents);
        setVisitsArray(data.visits);
        setFilteredVisits(data.visits);
      })
        }, [])

  useEffect(() => {
    fetch("/authorized")
      .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        }
      })
    } , [setUser])

  function addNewVisit(newVisit) {
    setVisitsArray([...visitsArray, newVisit])
  }

  const handleSearchInputChange = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
  
    const filtered = visitsArray.filter((visit) =>
        visit.tent.name.toLowerCase().includes(keyword) ||
        visit.date.toLowerCase().includes(keyword) ||
        visit.visit_rating.toString().includes(keyword) ||
        visit.user.username.toLowerCase().includes(keyword)
      )
    setFilteredVisits(filtered)
  }

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);

    const sorted = [...filteredVisits].sort((a, b) => {
      if (newSortOrder === 'id') {
        return a.id - b.id;
      } else if (newSortOrder === 'visit_rating') {
        return b.visit_rating - a.visit_rating;
      } else if (newSortOrder === 'tent_id') {
        return a.tent_id - b.tent_id;
      } else if (newSortOrder === 'user.username') {
        return a.user.username.localeCompare(b.user.username);
      } else if (newSortOrder === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setFilteredVisits(sorted);
  };

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
          <TentsList tents={tents}/>
        </Route>
        <Route path ='/oktoberfest_tents/:id'>
          <SingleTentDetail />
        </Route>
        <Route path ='/oktoberfest_visits'>
          <SearchAndSort 
            searchKeyword={searchKeyword} 
            handleSearchInputChange={handleSearchInputChange} 
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
          />
          <VisitsList 
            filteredVisits={filteredVisits} 
            tents={tents}
            onDelete={handleVisitDelete}
          />
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

export default App
