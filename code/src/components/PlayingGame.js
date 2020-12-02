import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { firstFetch, currentstate } from 'reducers/currentstate';


// Page showing instructions we got as reponse from the Backend
// Accessing the object with the instructions and showing them to the user
export const PlayingGame = () => {
  const gameStatusGlobal = useSelector((state) => state.currentstate.gameStatus);
  const actions = useSelector((state) => state.currentstate.gameStatus.actions);
  const historyArrray = useSelector((state) => state.currentstate.history);

  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(currentstate.actions.historyGoBack());
  };

  return (
    <>
      <div>
        <h2>{gameStatusGlobal.description}</h2>
      </div>

      <h3>Actions you can take:</h3>

      {actions.map((action) => (
        <div key={action.description} >
          <h4>{action.description}</h4>
          <h5>MOVE</h5>
          {/* This button will dispatch the second fetch thunk which will do the coming fetches with the next set of instructions
          to show the user: for this fetch we need to send an object including the username, type="move" and the direction the user chose
          so we send that data as a prop to the reducer*/}
          <button type="button" onClick={() => dispatch(firstFetch(action.direction))}>{action.direction}</button>
        </div>
      ))}
      {/*This button will allow the user to go back to their previous move, it calls the onHistoryBack function which dispatches
      the historyGoBack action from our reducer. This button will only be enabled after the user has clicked past the first set
      of instructions, so when the history array is longer than 1*/}
      <button type="button" onClick={onHistoryBack} disabled={historyArrray.length === 1}>GO BACK</button>
    </>
  );
};

