import { useContext } from "react"
import AppContext from "./AppContext"
import "./PartyPokemon.css"

export default function PartyPokemon({slot}){
  const {party} = useContext(AppContext)
  const pokemon = party[slot];

  if( pokemon == false ){
    return (
      <div className="party-pokemon">
        <p className="slot">{slot}</p>
        <h4 className="pokemon-name">No Data</h4>
        <img alt={"pokeball image"} src={"./pokeball-background.png"} />
      </div>
    )
  }

  return (
    <div className="party-pokemon">
      <p className="slot">{slot}</p>
      <h4 className="pokemon-name">Lv 100 {pokemon.name}</h4>
      <img alt={pokemon.name + " image"} src={pokemon.sprites.front_default} />
      <div className="hp-bar">
        <div className="hp-bar-shader"></div>
        <p>HP 358/358</p>
      </div>
    </div>
  )
}