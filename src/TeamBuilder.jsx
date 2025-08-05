import { useContext } from "react";
import AppContext from "./AppContext";
import TeamBuildCard from "./TeamBuildCard";
import "./TeamBuilder.css"

export default function TeamBuilder(){
  const [pokeList, , pokeListData, , party, setParty] = useContext(AppContext);

  const addPartyPokemon = (pokemonToAdd)=>{
    for( let [index, pokemon] of party.entries() ){
      console.log(index)
      if(pokemon === false){
        setParty( state => state.splice(index, 1, pokeListData[pokemonToAdd]));
        break;
      };
    };
    console.log(party)
  }
  const removePartyPokemon = (slot)=>{
    if(party[slot] == false){return};
    setParty( state => state.splice(slot, 1, false) );
  }

  if( !Array.isArray(pokeList) || pokeList?.length < 1 ){
    return <div>PokeList</div>
  }

  return(
    <div className="team-builder">
      <h2>Team Builder</h2>
      <div className="team-builder-available">
        <h3>Available Pokemon</h3>
        {pokeList.map(pokemon => <TeamBuildCard key={pokemon.name} data={pokemon} clickHandler={()=>{addPartyPokemon(pokemon.name)}}/>)}
      </div>
      <div className="team-builder-party">
        <h3>Party Pokemon</h3>
        {party.map((pokemon, index) => <TeamBuildCard key={index} data={pokemon} clickHandler={()=>{removePartyPokemon(index)}}/>)}
      </div>
    </div>
  )
}