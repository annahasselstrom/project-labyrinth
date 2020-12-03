import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
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
export const Title = styled.h1`
font-size: 40px;
text-shadow: 2px 2px 4px #000000;
background: -webkit-linear-gradient(#eee, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const InputContainer = styled.div`
display:flex;
justify-content: center;
`
export const Input = styled.input`

`
export const ButtonContainer = styled.div`
margin-top: 40px;
`
export const Button = styled.a`
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
