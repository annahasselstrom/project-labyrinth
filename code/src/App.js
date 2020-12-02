import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { StartingGame } from './components/StartingGame';

import { currentstate } from 'reducers/currentstate';


const reducer = combineReducers({ currentstate: currentstate.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartingGame />
    </Provider>
  );
};

// Flow: First page rendered is the one for creating a username, move on the the CreateUsernamePage component
// and there it will have instruction to move on to the next Page accordingly
// Loading page will be shown when the isLoading global state is true: this is mainly
// when fetches are being performed
// Flow: Home > CreateUsernamePage > StartGamePage > InGamePage

