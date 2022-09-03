import "./CharacterCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const CharacterCard = (props) => {

  const dispatch = useDispatch()

  const handleOnClick = () => dispatch(actions.deleteCharacter(props.id))

  return (
    <div className="card">
      <button onClick={handleOnClick}>X</button>
      <Link to={`/character/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt={props.name} />
      <p>{props.faction}</p>
    </div>
  );
};

export default CharacterCard;
