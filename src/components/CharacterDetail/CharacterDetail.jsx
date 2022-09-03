import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import * as ReactRedux from 'react-redux'

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = ({ match }) => {
  const dispatch = useDispatch()

  const characterId = match.params.id

  const characterDetail = ReactRedux.useSelector((state) => state.characterDetail)

  React.useEffect(() => { dispatch(actions.getCharacterDetail(characterId)) }, [])

  return (
    <div>
      {characterDetail.name}
      {characterDetail.faction}
      {characterDetail.role}
      {characterDetail.race}
      <img src={characterDetail.image} alt={characterDetail.name} />
      {characterDetail.ship.name}
      <img src={characterDetail.ship.image} alt={characterDetail.ship.name} />
    </div>
  );
};


export default CharacterDetail;
