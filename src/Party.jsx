import PartyPokemon from "./PartyPokemon";
import "./Party.css";

export default function Party(){
  return (
    <div className="Party">
      <PartyPokemon key="slot-1" slot={0} />
      <PartyPokemon key="slot-2" slot={1} />
      <PartyPokemon key="slot-3" slot={2} />
      <PartyPokemon key="slot-4" slot={3} />
      <PartyPokemon key="slot-5" slot={4} />
      <PartyPokemon key="slot-6" slot={5} />
    </div>
  )
}