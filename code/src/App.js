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


