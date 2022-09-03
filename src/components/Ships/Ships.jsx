import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import * as ReactRedux from 'react-redux'
import ShipCard from "../ShipCard/ShipCard";
// Este componente hay que resolverlo de la mano de ShipCard para hacerlo funcionar correctamente!
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
export default function Ships() {
  const dispatch = useDispatch();

  const ships = ReactRedux.useSelector((state) => state.Ships)

  React.useEffect(() => { dispatch(actions.getShips()) }, [])

  return (
    <div>
      <h1>The most iconic Ships!</h1>
      {ships && ships.map(s => (
        <ShipCard
          name={s.name}
          image={s.image}
        />
      ))}
    </div>
  )
};