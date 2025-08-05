import {useEffect, useState} from "react"
import {BrowserRouter as Router} from "react-router";
import AppContext from "./AppContext";
import AppRouter from "./AppRouter";
import TeamBuilder from "./TeamBuilder";

const MOCK_DATA = {
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=9&limit=9",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    }
  ]
}

export default function App() {
  const [party, setParty] = useState([Array(6).fill(false)][0]);
  const [pokeList, setPokeList] = useState([]);
  const [pokeListData, setPokeListData] = useState({});

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then( response => {
        if(response.status === 200){
          return response.json();
        } else { throw new Error(response.statusText)}
      })
      .then( json => setPokeList(json.results))
      .catch(error => console.log(error))
    // setPokeList(MOCK_DATA.results);
  },[])

  return (
    <AppContext value={[pokeList, setPokeList, pokeListData, setPokeListData, party, setParty]}>
        <Router>
          <header>
            <h1>Pokemon Battling</h1>
          </header>
          <TeamBuilder />
          <AppRouter />
        </Router>
    </AppContext>
  )
}

//First Party Selection Page