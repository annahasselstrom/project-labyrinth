import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { firstFetch } from 'reducers/currentstate';

import { PlayingGame } from './PlayingGame';

// This component is responsible for dispatching the first POST request that will populate
// the initialState with the API object. A welcoming message and button to start game.
// The compononent calls the PlayingGame component only if the initialState has been populated.
// That is, only after the first response is back.
export const StartingGame = () => {
  const gameStatusGlobal = useSelector((state) => state.currentstate.gameStatus.coordinates);

  const dispatch = useDispatch();

  if (gameStatusGlobal) {
    return <PlayingGame />
  };
  
  // The dispatch payload is the firstFetch action handled by the reducer with the same name. After
  // that and after initialState is populated with the response, the PlayingGame is rendered.
  return (
    <>
      <h1>{"Welcome! Let's play!"}</h1>
      {/* This start game button should trigger the first fetch thunk to fetch the first set of instructions
      received from the response when doing the first POST request, we send in the current username as prop
      so we can send that data on our POST request*/}
      <button type="button" onClick={() => dispatch(firstFetch())}>Play Game</button>
      {gameStatusGlobal}
    </>
  );
};