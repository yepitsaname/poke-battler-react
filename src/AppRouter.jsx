import { Routes, Route } from "react-router";
import TeamBuilder from "./TeamBuilder";
import Party from "./Party";

export default function AppRouter(){
return (
    <Routes>
      <Route path="/" element=""/>
      <Route path="/team-builder" element={<TeamBuilder/>}/>
      <Route path="/party" element={<Party/>}></Route>
    </Routes>
  )
}