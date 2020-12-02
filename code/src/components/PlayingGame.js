import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextFetch, currentstate } from 'reducers/currentstate';

// This component is responsible for passing data to the Redux store (and the POST requests) 
// in order to keep the store updated and have the player moving forward in the game.
// For this the component needs access to: current gamestatus, actions, and history of the 
// player.
export const PlayingGame = () => {
  const actions = useSelector((state) => state.currentstate.gameStatus.actions);
  const gameStatusGlobal = useSelector((state) => state.currentstate.gameStatus);
  const historyArrray = useSelector((state) => state.currentstate.history);
  const usernameGlobal = useSelector((state ) => state.currentstate.username);

  const dispatch = useDispatch();

  // The function onHistoryBack dispatches to the reducer, the payload action of historyGoBack, triggered by
  // the onclick below. The historyGoBack action is then handled by the reducer historyGoBack.
  const onHistoryBack = () => {
    dispatch(currentstate.actions.historyGoBack());
  };

  // The component is also responsible for mapping over and outputting different properties
  // from the Api object, and by sending another nextFetch on every onclick by player. The onclick 
  // stores the value of the direction chosen by the player, for the Api to know what next 
  // instructions to pass back in the response.
  // The Go back-button calls the onHistoryBack function that dispatches the historyGoBack action, handled
  // by the reducer with the same name. The button is disabled until a first move is made.
  return (
    <>
      <div>
        <h2>{gameStatusGlobal.description}</h2>
      </div>
      <h3>Time to decide - where to go?</h3>
      {actions.map((action) => (
        <div key={action.description} >
          <h4>{action.description}</h4>
          <h5>Make your move!</h5>
          <button type="button" onClick={() => dispatch(nextFetch(action.direction, usernameGlobal))}>{action.direction}</button>
        </div>
      ))}
      <button type="button" onClick={onHistoryBack} disabled={historyArrray.length === 1}>GO BACK</button>
    </>
  );
};

