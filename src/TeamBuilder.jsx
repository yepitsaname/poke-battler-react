import { useContext } from "react";
import AppContext from "./AppContext";
import TeamBuildCard from "./TeamBuildCard";
import "./TeamBuilder.css"

export default function TeamBuilder(){
  const {pokeList, party, setParty} = useContext(AppContext);

  const addPartyPokemon = (pokemonToAdd)=>{
    for( let [index, pokemon] of party.entries() ){
      if(pokemon === false){
        let newParty = [...party];
        newParty.splice(index, 1, pokemonToAdd)
        setParty( newParty );
        break;
      };
    };
  }
  const removePartyPokemon = (slot)=>{
    if(party[slot] == false){return};
    let newParty = party.map(element=>element);
    newParty.splice(slot, 1, false);
    setParty( newParty );
  }

  if( !Array.isArray(pokeList) || pokeList?.length < 1 ){
    return <div>PokeList</div>
  }

  return(
    <div className="team-builder">
      <h2>Team Builder</h2>
      <div className="team-builder-available">
        <h3>Available Pokemon</h3>
        {pokeList.map((pokemon) => <TeamBuildCard key={pokemon.name} pokemon={pokemon} clickHandler={addPartyPokemon}/>)}
      </div>
      <div className="team-builder-party" key={party}>
        <h3>Party Pokemon</h3>
        {party.map((pokemon, index) => <TeamBuildCard key={index} pokemon={pokemon} clickHandler={()=>{removePartyPokemon(index)}}/>)}
      </div>
    </div>
  )
}