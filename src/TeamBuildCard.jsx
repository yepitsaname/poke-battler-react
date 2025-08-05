import { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import './TeamBuildCard.css';
import './types.css'

export default function TeamBuildCard({data, clickHandler}){
  const [ , , pokeListData, setPokeListData] = useContext(AppContext)
  const [ pokemon, setPokemon ] = useState(data);

  useEffect(()=>{
    if( typeof pokemon !== 'object' ){ return };
    if( !pokeListData.hasOwnProperty(pokemon.name) ){
      fetch(pokemon.url)
      .then( response => {
        if(response.status === 200){
          return response.json();
        } else { throw new Error(response.statusText)}
      })
      .then( json => {
        setPokemon( json );
      })
      .catch(error => console.log(error))
    } else {
      setPokemon(pokeListData[pokemon.name]);
    }
  },[])

  useEffect(()=>{
    setPokeListData(state => Object.assign(state, {[pokemon.name]: pokemon}))
  }, [pokemon])

  if( typeof pokemon !== 'object' || Object.keys(pokemon).length <= 2 ){
    return(
      <div className={"team-build-card blank"}>
        <div className={"team-build-card-shader"}/>
        <div className="image-wrapper">
          <img alt={pokemon?.name ? pokemon.name + " image" : "an empty pokeball"} src={"./pokeball-background.png"}/>
        </div>
        <h4>{pokemon?.name ? pokemon.name : "empty"}</h4>
      </div>
    )
  }

  return(
    <div className={"team-build-card " + (pokemon?.types[0].type.name ? pokemon.types[0].type.name : "blank")} onClick={clickHandler}>
      <div className={"team-build-card-shader "}/>
      <div className="image-wrapper">
        <img alt={pokemon.name + " image"} src={pokemon.sprites.front_default}/>
      </div>
      <h4>{pokemon.name ? pokemon.name : "empty"}</h4>
    </div>
  )
}