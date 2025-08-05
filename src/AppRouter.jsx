import { Routes, Route } from "react-router";
import TeamBuilder from "./TeamBuilder";

export default function AppRouter(){
return (
    <Routes>
      <Route path="/" element=""/>
      <Route path="/Team-Builder" element={<TeamBuilder/>}/>
    </Routes>
  )
}