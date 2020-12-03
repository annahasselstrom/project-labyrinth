import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { StartingGame } from './components/StartingGame';
import { currentstate } from 'reducers/currentstate';
import { ui } from 'reducers/ui';

import { Loading } from './components/Loading';

const reducer = combineReducers({ 
  currentstate: currentstate.reducer,
  ui : ui.reducer
 });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Loading />
      <StartingGame />
    </Provider>
  );
};


