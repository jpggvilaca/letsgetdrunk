import {
  FINISHED_INTRO,
  PLAYERS_PICKED
} from './actions';

const initialState = {
  finishedIntro: false,
  playersPicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISHED_INTRO:
      return {
        ...state,
        finishedIntro: true
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
