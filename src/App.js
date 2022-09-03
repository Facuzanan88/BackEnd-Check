import React from "react";
import { Route } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Ships from "./components/Ships/Ships";

function App() {
  return (
    <div>
      <Route path='/'>
        <Nav />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path="/character/:id" >
        <CharacterDetail />
      </Route>
      <Route exact path="/character/create" >
        <CreateCharacter />
      </Route>
      <Route exact path="/ships" >
        <Ships />
      </Route>
    </div>
  );
}
export default App;
