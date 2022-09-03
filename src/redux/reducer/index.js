import { CREATE_CHARACTER, DELETE_CHARACTER, GET_CHARACTERS, GET_CHARACTER_DETAIL, GET_SHIPS } from "../actions";

// Importa las action types acá
const initialState = {
  characters: [],
  characterDetail: {},
  ships: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_CHARACTERS: return {
      ...state,
      characters: action.payload
    }

    case GET_CHARACTER_DETAIL: return {
      ...state,
      characterDetail: action.payload
    }

    case CREATE_CHARACTER: return {
      ...state,
      characters: [...state.characters, action.payload]
      // products: state.products.concat(action.payload)
    }

    case DELETE_CHARACTER: return {
      ...state,
      characters: state.characters.filter((p) => p.id !== action.payload)
    }

    case GET_SHIPS: return {
      ...state,
      ships: action.payload
    }

    default: return state;
  }
};

export default rootReducer;
