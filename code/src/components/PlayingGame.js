import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { nextFetch, currentstate } from 'reducers/currentstate';
import { GameOver } from './GameOver';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
`
const HeaderContainer = styled.div`
  border-radius: 6px;
  max-width: 300px;
  box-shadow: 0px 1px 2px 1px black;
  text-align: center;
  margin-top: 20px;
  color: white;
  padding:20px;
  background: rgba(8, 8, 8, 0.565);
    @media (min-width: 768px) {
      max-width: 500px;
}
`
const HeaderText = styled.h2`
  font-size: 25px;
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(#eee, white);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
    @media (min-width: 768px) {
      font-size: 32px;
    }
`
const ActionContainer = styled.div`
  box-shadow: 0px 1px 2px 1px black;
  border-radius: 6px;
  max-width: 300px;
  text-align: center;
  margin-top: 60px;
  color: white;
  padding:0 20px 20px 20px;
  background: rgba(8, 8, 8, 0.565);
    @media (min-width: 768px) {
      max-width: 500px;
    }
`
const ActionTitle = styled.h4`
  font-size: 30px;
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(#eee, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const ActionText = styled.h4` 
  font-size: 20px;
  margin-top:30px;
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(#eee, #6e985b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
      @media (min-width: 768px) {
        font-size: 25px;
     }
`
const Button = styled.a`
  margin-top: 50px;
  margin-bottom: 40px;
  border-radius: 6px;
  font-size: 30px;
  text-align: center;
  border-bottom: black solid 1px;
  max-width: 150px;
  cursor: pointer;
  box-shadow: 0px 5px 5px 0px black;
  padding: 0 10px 0 10px;
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(#eee, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover {
      text-shadow: 2px 2px 4px #000000;
    background: -webkit-linear-gradient(black, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    :active {
      background-color: #3e8e41;
      box-shadow: 0px 5px 5px 0px darkred;
      transform: translateY(4px);
    }
    @media (min-width: 768px) {
      font-size: 32px;
    }
`
const StartOverButton = styled.a`
margin-top: 50px;
font-family: 'MedievalSharp', cursive;
margin-bottom: 40px;
border-radius: 6px;
font-size: 20px;
text-align: center;
border-bottom: black solid 1px;
max-width: 150px;
cursor: pointer;
box-shadow: 0px 5px 5px 0px black;
padding: 0 10px 0 10px;
text-shadow: 2px 2px 4px #000000;
background: -webkit-linear-gradient(#eee, white);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
:hover {
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(black, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
:active {
  background-color: #3e8e41;
  box-shadow: 0px 5px 5px 0px darkred;
  transform: translateY(4px);
}
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

// This component is responsible for passing data to the Redux store (and the POST requests) 
// in order to keep the store updated and have the player moving forward in the game.
// For this the component needs access to: current gamestatus, actions, and history of the 
// player.
export const PlayingGame = () => {
  const actions = useSelector((state) => state.currentstate.gameStatus.actions);
  const gameStatus = useSelector((state) => state.currentstate.gameStatus);
  const historyArrray = useSelector((state) => state.currentstate.history);
  const username = useSelector((state) => state.currentstate.username);

  const dispatch = useDispatch();

  // The function onHistoryBack dispatches to the reducer, the payload action of historyGoBack, triggered by
  // the onclick below. The historyGoBack action is then handled by the reducer historyGoBack.
  const onHistoryBack = () => {
    dispatch(currentstate.actions.historyGoBack());
  };

  // This if will show the GameOver page so the player can start over when 
  //  the player have finished the game
  if (actions.length === 0) {
    return (
      <GameOver />
    )
  };

  // The component is also responsible for mapping over and outputting different properties
  // from the Api object, and by sending another nextFetch on every onclick by player. The onclick 
  // stores the value of the direction chosen by the player, for the Api to know what next 
  // instructions to pass back in the response.
  // We map over each object in the actions array. Each object contains of three properties:
  // type, direction and description, and the value associated with each of these keys (or names).
  // The Go back-button calls the onHistoryBack function that dispatches the historyGoBack action, handled
  // by the reducer with the same name. The button is disabled until a first move is made.
  return (
    <Container>
      <Button type="button" onClick={onHistoryBack}> GO BACK </Button>
      <HeaderContainer>
          <HeaderText>{gameStatus.description}</HeaderText>
      </HeaderContainer>
      <ActionContainer>
        <ActionTitle>{username} - where to go?</ActionTitle>
        {actions.map((action) => (
          <div key={action.description} >
            <ActionText>{action.description}</ActionText>
            <h5>Make your move!</h5>
            <Button type="button" onClick={() => dispatch(nextFetch(action.direction, username))}>{action.direction}</Button>
          </div>
        ))}
      </ActionContainer>
      <Button type="button" onClick={onHistoryBack} disabled={historyArrray.length === 1}>GO BACK</Button>

      {/*This button will allow the user to go back to the starting page*/}
      <StartOverButton buttonwidth onClick={() => window.location.reload()}>Start Over</StartOverButton>
    </Container>
  );
};
