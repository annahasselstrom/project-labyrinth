import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const GameOver = () => {
    const gameStatus = useSelector((state) => state.currentstate.gameStatus)

    return (
        <>
        <GameOverContainer>
        <GameOverCard>
        <GameOverText>{gameStatus.description}</GameOverText>
          {/*This button will allow the user to go back to the starting page */}
        <StartOverButton buttonwidth onClick={() => window.location.reload()}>Start New Game</StartOverButton>
        </GameOverCard>
        </GameOverContainer>
        </>
    )
}

const GameOverContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`
const GameOverCard = styled.div`
    box-shadow: 0px 1px 2px 1px black;
    border-radius: 6px;
    max-width: 300px;
    text-align: center;
    margin-top: 100px;
    color: white;
    padding:20px;
    background: rgba(8, 8, 8, 0.565);
        @media (min-width: 768px) {
        max-width: 500px;
    }
`
const GameOverText = styled.h1`
    font-size: 25px;
    text-shadow: 2px 2px 4px #000000;
    background: -webkit-linear-gradient(#eee, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: 768px) {
        font-size: 32px;
    }
`
const StartOverButton = styled.button`
    font-family: 'MedievalSharp', cursive;
    margin-top: 50px;
    margin-bottom: 40px;
    border-radius: 6px;
    font-size: 30px;
    text-align: center;
    border-bottom: black solid 1px;
    max-width: 200px;
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