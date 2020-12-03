import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  gameStatus: {},
  history: []
};

export const currentstate = createSlice({
  name: 'currentstate',
  initialState,
  reducers: {
    // A reducer that takes the payload - the entire response object from the Api,
    // and stores it in Redux store.
    setGameStatus: (state, action) => {
      // The payload (the API object) is stored in the variable currentGameState
      const currentGameState = action.payload;
      // the history property stores all the user moves. The spread operator includes all previous moves.
      // state.gameStatus stores the current move
      state.history = [...state.history, state.gameStatus];
      // Stores current move/position in game
      state.gameStatus = currentGameState;
    },

    // Updates the username property in the state. The new value comes from payload.
    // Payload comes from the input value from StartingPage.
    updateUsername: (state, action) => {
      state.username = action.payload;
    },

    // A reducer that takes the user back to previous moves. It is initialzed as an empty array and
    // it will be populated with the user moves.
    // The reducer takes the currentGameState (where in game user is) and set that to the last move in the history array.
    // It also removes, using slice(), the last move in the array, since that move becomes the current move when back-tracking.
    historyGoBack: state => {
      if (state.history.length > 0) {
        state.gameStatus = state.history[state.history.length -1];
        state.history = state.history.slice(0, state.history.length -1);
      }
    }
  }
});
// The initial POST request getting the welcome message and first move.
// The API body needs a username: "username" in order to keep track of where in the game,
// the user is. The thunk is needed to handle the asynchroneisity. It is a function that 
// returns a function.
// The payload of the dispatch is the value we pass into the slice 'currentstate' and reducer 
// 'setGameStatus'. In this case the whole json object we get as a respones.
// The initialState is no longer empty.
export const firstFetch = (username) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(currentstate.actions.setGameStatus(json));
      })
  }
};

// The second API endpoint is, after the first is done, now used everytime the user makes a move. 
// User moves are passed in, in the body of the fetch to let the Api know what respons to send back.
// The dispatch then updates the currentstate with the returning json respons.
export const nextFetch = (direction, username) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, type: "move", direction: direction }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(currentstate.actions.setGameStatus(json));
      })
  }
};
