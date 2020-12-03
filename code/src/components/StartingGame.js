import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
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
    <>
      <Container>
        <Title>{`Welcome to this mysterious Game`}</Title>
        <InputContainer>
          <Inputer>
            <input
              placeholder='Your player name'
              type='text'
              style={{
                backgroundColor: "black",
                height: "30px",
                border: "none",
                borderRadius: "10px",
                paddingLeft: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",
                fontSize: "15px",
                color: "red"
              }}
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
          </Inputer>
          <InputButton>
            <Button onClick={updateUsername}>Save</Button>
          </InputButton>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={() => dispatch(firstFetch(username))}>Play Game</Button>
        </ButtonContainer>
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
  @media (min-width: 768px) {
    max-width: 500px;
  }
`
const Title = styled.h1`
  font-size: 40px;
  text-shadow: 2px 2px 4px #000000;
  background: -webkit-linear-gradient(#eee, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: 768px) {
      font-size: 60px;
    }
`
const InputContainer = styled.div`
  display:flex;
  justify-content: center;
`
const Inputer = styled.div`
  box-shadow: 0px 0px 5px 0px yellowgreen;
  border-radius: 6px;
`
const InputButton = styled.div`
  margin-left: 20px;
`
const ButtonContainer = styled.div`
  margin-top: 40px;
`
const Button = styled.a`
  border-radius: 6px;
  font-size: 28px;
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