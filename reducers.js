import {
  FINISHED_INTRO,
  PLAYERS_PICKED,
  ADD_PLAYER,
} from './constants';

const initialState = {
  finishedIntro: false,
  playersPicked: false,
  players: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISHED_INTRO:
      return {
        ...state,
        finishedIntro: true
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      }
    case PLAYERS_PICKED:
      return {
        ...state,
        playersPicked: true
      }
    default:
      return state;
  }
}

export default reducer;
