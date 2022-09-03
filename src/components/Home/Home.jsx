import "./home.css";
import React, { Component } from "react";
import { getCharacters } from "../../redux/actions";

import { connect } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
// Aparte Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {

  componentDidMount() {
    this.props.getCharacters();
  }


  render() {
    return (
      <div className="home">
        <h1>Star Wars</h1>
        <h2>May the force be with you</h2>
        <img src="cp-fm2-image.png" alt="star-wars-logo" />
        <h3>Characters</h3>
        {this.props.characters && this.props.characters.map(e => (
          <CharacterCard
            id={e.id}
            name={e.name}
            director={e.director}
            releaseYear={e.releaseYear}
            image={e.image}
            faction={e.faction}
          />
        )

        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export const mapDispatchToProps = {
  getCharacters
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
