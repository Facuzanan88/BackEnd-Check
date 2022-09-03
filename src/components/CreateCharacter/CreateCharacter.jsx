import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {

  const dispatch = useDispatch()

  const [state, setState] = React.useState({
    name: '',
    race: '',
    faction: '',
    role: '',
    ship: '',
  })

  function handleChange(p) {
    setState({
      ...state,
      [p.target.name]: p.target.value,
    })
  }


  return (
    <form>

      <label>Name: </label>
      <input type='text' name="name" onChange={() => handleChange()} />

      <label>Race: </label>
      <input type='text' name="race" value={state.race} onChange={handleChange} />

      <label>Faction: </label>
      <input type='text' name="faction" value={state.faction} onChange={handleChange} />

      <label>Role: </label>
      <input type='text' name="role" value={state.role} onChange={handleChange} />

      <label>Ship: </label>
      <input type='text' name="ship" value={state.ship} onChange={handleChange} />

      <button type='submit'>Create Character</button>
    </form>
  );
};


export default CreateCharacter;
