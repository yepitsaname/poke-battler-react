import { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import './TeamBuildCard.css';
import './types.css'

export default function TeamBuildCard({pokemon, clickHandler}){
  const { party, setParty } = useContext(AppContext)
  const [pokemonData, setPokemonData] = useState({name: 'empty'});

  useEffect(()=>{
    if( typeof pokemon !== 'object' ){ return };
    if( Object.keys(pokemon).length > 2 ){
      setPokemonData(pokemon);
      return ;
    };

    fetch(pokemon.url)
    .then( response => {
      if(response.status === 200){
        return response.json();
      } else { throw new Error(response.statusText)}
    })
    .then( json => {
      setPokemonData(json);
    })
    .catch(error => console.log(error));
  },[])

  if( Object.keys(pokemonData).length <= 2 ){
    return(
      <div className={"team-build-card blank"}>
        <div className={"team-build-card-shader"}/>
        <div className="image-wrapper">
          <img alt={pokemonData.name ? pokemonData.name + " image" : "an empty pokeball"} src={"./pokeball-background.png"}/>
        </div>
        <h4>{pokemonData.name ? pokemonData.name : "empty"}</h4>
      </div>
    )
  }

  return(
    <div className={"team-build-card " + (pokemonData.types[0].type.name ? pokemonData.types[0].type.name : "blank")} onClick={()=>{clickHandler(pokemonData)}}>
      <div className={"team-build-card-shader " + (pokemonData.types.length > 1 ? pokemonData.types[1].type.name : "blank")}/>
      <div className="image-wrapper">
        <img alt={pokemonData.name + " image"} src={pokemonData.sprites.front_default}/>
      </div>
      <h4>{pokemonData.name ? pokemonData.name : "empty"}</h4>
    </div>
  )
}