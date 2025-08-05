import {useEffect, useState} from "react"
import {BrowserRouter as Router, Link} from "react-router";
import AppContext from "./AppContext";
import AppRouter from "./AppRouter";
import "./App.css"


export default function App() {
  const [party, setParty] = useState([Array(6).fill(false)][0]);
  const [pokeList, setPokeList] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then( response => {
        if(response.status === 200){
          return response.json();
        } else { throw new Error(response.statusText)}
      })
      .then( json => setPokeList(json.results))
      .catch(error => console.log(error))
  },[])

  return (
    <AppContext.Provider value={
      {
        pokeList: pokeList, setPokeList: setPokeList,
        party: party, setParty: setParty
      }
    }>
        <Router>
          <header>
            <h1>Pokemon Battling</h1>
          </header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/team-builder">Team Builder</Link>
            <Link to="/party">View Party</Link>
          </nav>
          <AppRouter />
        </Router>
    </AppContext.Provider>
  )
}