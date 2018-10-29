import { createSelector } from 'reselect';

export const hasFinishedIntro = state => state.finishedIntro;
export const hasPickedPlayers = state => state.playersPicked;

export const mainScreenData = createSelector(
  [hasFinishedIntro, hasPickedPlayers],
  (finishedIntro, playersPicked) => ({
    finishedIntro,
    playersPicked
  })
);
