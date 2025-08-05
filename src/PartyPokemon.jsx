import { useContext } from "react"
import AppContext from "./AppContext"
import "./PartyPokemon.css"

export default function PartyPokemon({slot}){
  const {party} = useContext(AppContext)
  const pokemon = party[slot];

  if( pokemon == false ){
    return (
      <div className="party-pokemon">
        <p className="slot">{slot + 1}</p>
        <h4 className="pokemon-name">No Data</h4>
        <img alt={"pokeball image"} src={"./pokeball-background.png"} />
      </div>
    )
  }

  return (
    <div className={"party-pokemon " + pokemon.types[0].type.name}>
      <div className={"party-pokemon-shader " + (pokemon.types.length > 1 ? pokemon.types[1].type.name : " blank")}></div>
      <p className="slot">{slot + 1}</p>
      <h4 className="pokemon-name">Lv 100 {pokemon.name}</h4>
      <img alt={pokemon.name + " image"} src={pokemon.sprites.front_default} />
      <div className="hp-bar">
        <div className="hp-bar-shader"></div>
        <p>HP 358/358</p>
      </div>
    </div>
  )
}