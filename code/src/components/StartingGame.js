import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { firstFetch, currentstate } from 'reducers/currentstate';
  
import { PlayingGame } from './PlayingGame';

// This component is responsible for dispatching the first POST request that will populate
// the initialState with the API object. A welcoming message and button to start game.
// The compononent calls the PlayingGame component only if the initialState has been populated.
// That is, only after the first response is back.
export const StartingGame = () => {
  const gameCoordinates = useSelector((state) => state.currentstate.gameStatus.coordinates);
 //const usernameGlobal = useSelector((state ) => state.currentstate.username);
  
  // The input value is stored locally. This is only used before button to update
  // username is pressed. Then the value is stored in Redux global store.
  const [inputValue, setInputValue] = useState('');
  const username = useSelector(store => store.currentstate.username)
  const dispatch = useDispatch();

  //useEffect - let's us control when the fetch is done. Here perform fetch only after 
  //the Redux store is updated with the new username (the new value from valueInput)
  useEffect(() => {
   firstFetch()
  }, [username]);

  if (gameCoordinates) {
    return <PlayingGame />
  };

  // Stores and updates username locally.
  const updateUsername = () => {
    console.log(inputValue)
    dispatch(currentstate.actions.updateUsername(inputValue))
  }
 
  // The dispatch payload is the firstFetch action handled by the reducer with the same name. After
  // that and after initialState is populated with the response, the PlayingGame is rendered.
  return (
    <div className='start-page-container'>
      <h1>{"Welcome! Let's play!"}</h1>
        <input
          placeholder='Your player name'
          type='text'
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button className='username-input'
          onClick={updateUsername}>
          Log in
        </button>
      <button type="button" onClick={() => dispatch(firstFetch(username))}>Play Game</button>
    </div>
  );
};