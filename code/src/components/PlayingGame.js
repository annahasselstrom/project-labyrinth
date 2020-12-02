import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'

import { nextFetch, currentstate } from '../reducers/currentstate';


// Page showing instructions we got as reponse from the Backend
// Accessing the object with the instructions and showing them to the user
export const PlayingGame = () => {
  const gameStatusGlobal = useSelector((state) => state.currentstate.gameStatus);
  const actions = useSelector((state) => state.currentstate.gameStatus.actions);

  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(currentstate.actions.historyGoBack());
  };

  return (
    <>
    <Container>
    <Button type="button" onClick={onHistoryBack}> GO BACK </Button>

      <HeaderContainer>
        
      <div>
        <HeaderText>{gameStatusGlobal.description}</HeaderText>
      </div>
      </HeaderContainer>
<ActionContainer>
      <ActionTitle>Actions you can take:</ActionTitle>

      {actions.map((action) => (
        <div key={action.description} >
          <ActionText>{action.description}</ActionText>
          {/* This button will dispatch the second fetch thunk which will do the coming fetches with the next set of instructions
          to show the user: for this fetch we need to send an object including the username, type="move" and the direction the user chose
          so we send that data as a prop to the reducer*/}
         
          <Button type="button" onClick={() => dispatch(nextFetch(action.direction))}>{action.direction}</Button>
          
        </div>
      ))}
      
      </ActionContainer>
      {/*This button will allow the user to go back to their previous move, it calls the onHistoryBack function which dispatches
      the historyGoBack action from our reducer. This button will only be enabled after the user has clicked past the first set
      of instructions, so when the history array is longer than 1*/}
 
      <Button type="button" onClick={onHistoryBack}> GO BACK </Button>
  
      </Container>
    </>
  );
};

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
`
const HeaderContainer = styled.div`
box-shadow: 0px 1px 2px 1px black;
border-radius: 6px;
max-width: 300px;
text-align: center;
margin-top: 20px;
color: white;
padding:20px;
background: rgba(8, 8, 8, 0.565);
`
const HeaderText = styled.h2`
font-size: 25px;
text-shadow: 2px 2px 4px #000000;
background: -webkit-linear-gradient(#eee, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
`

const Button = styled.a`
margin-top 50px;
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
`