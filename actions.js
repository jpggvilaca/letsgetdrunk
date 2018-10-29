import {
  FINISHED_INTRO,
  PLAYERS_PICKED,
  ADD_PLAYER,
} from './constants';

export const addPlayer = player => ({
  type: ADD_PLAYER, payload: player
});