import React from "react";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    name: "",
    race: "",
    role: "",
    faction: "",
    ship: {
      name: "",
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createCharacter(state));
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeShips = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        name: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Name: </label>
      <input name="name" type="text" onChange={handleOnChange} />
      <label>Race: </label>
      <input name="race" type="text" onChange={handleOnChange} />
      <label>Faction: </label>
      <input name="faction" type="text" onChange={handleOnChange} />
      <label>Role: </label>
      <input name="role" type="text" onChange={handleOnChange} />
      <label>Ship: </label>
      <input name="ship" type="text" onChange={handleOnChangeShips} />
      <button type="submit">Create Character</button>
    </form>
  );
};

export default CreateCharacter;
