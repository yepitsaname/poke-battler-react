import { Routes, Route } from "react-router";
import TeamBuilder from "./TeamBuilder";

export default function AppRouter(){
return (
    <Routes>
      <Route path="/" element=""/>
      <Route path="/team-builder" element={<TeamBuilder/>}/>
      <Route path="/party" element=""></Route>
    </Routes>
  )
}