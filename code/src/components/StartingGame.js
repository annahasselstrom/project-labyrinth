import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { firstFetch, currentstate } from 'reducers/currentstate';

import { PlayingGame } from './PlayingGame';

// This component has a welcome message to greet the new user and also includes a button to
// start the game. This button will do our initial fetch to fetch the first game instructions from
// the backend
export const StartingGame = () => {
  const gameStatusGlobal = useSelector((state) => state.currentstate.gameStatus.coordinates);

  const dispatch = useDispatch();

  // Once our gameStatus is populated with an object with properties, we can then render the InGamePage
  // which will now show on the browser the first instruction for the user to choose from
  if (gameStatusGlobal) {
    return <PlayingGame />
  };

  return (
    <>
      <h1>{`Welcome! to this Technigo Game!`}</h1>
      {/* This start game button should trigger the first fetch thunk to fetch the first set of instructions
      received from the response when doing the first POST request, we send in the current username as prop
      so we can send that data on our POST request*/}
      <button type="button" onClick={() => dispatch(firstFetch())}>Start Game</button>
      {gameStatusGlobal}
    </>
  );
};