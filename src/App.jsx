// Build out party view
// Party card
// Detail view
import {useState} from "react"
import AppContext from "./AppContext";
import UserContext from "./AppContext";

export default function App() {
  const [party, setParty] = useState([Array(6).fill(false)])

  return (
    <AppContext value={[]}>
        <UserContext value={[party, setParty]}>
        <></>
        {/* <PartyScreen /> */}
      </UserContext>
    </AppContext>
  )
}
