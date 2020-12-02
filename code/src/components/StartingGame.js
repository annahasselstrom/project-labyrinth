import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { firstFetch } from '../reducers/currentstate';

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
    <Container>
      <Title>{`Welcome to this mysterious Game`}</Title>
      <h3>Please enter your name:____________</h3>
      {/* This start game button should trigger the first fetch thunk to fetch the first set of instructions
      received from the response when doing the first POST request, we send in the current username as prop
      so we can send that data on our POST request*/}
      <Button type="button" onClick={() => dispatch(firstFetch())}>Start Game</Button>
      {gameStatusGlobal}
      </Container>
    </>
  );
};


const Container = styled.div`
  box-shadow: 0px 1px 2px 1px black;
  border-radius: 6px;
  max-width: 300px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 40px;
  margin-top: 200px;
  margin-bottom:200px;
  color: white;
  background: rgba(8, 8, 8, 0.565);
`
const Title = styled.h1`
font-size: 40px;
text-shadow: 2px 2px 4px #000000;
background: -webkit-linear-gradient(#eee, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const Button = styled.a`
border-radius: 6px;
font-size: 30px;
text-align: center;
border-bottom: black solid 1px;
max-width: 150px;
box-shadow: 0px 5px 5px 0px black;
padding: 5px;
cursor: pointer;
background: -webkit-linear-gradient(#eee, white);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;}
text-shadow: 2px 2px 4px #000000;

`