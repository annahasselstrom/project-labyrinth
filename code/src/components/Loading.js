
import React from 'react';
import { useSelector } from 'react-redux'
import styled, { keyframes } from "styled-components";

export const Loading = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return (
        <>

            {isLoading &&
                <Container>
                    <DotWrapper>
                        <Dot delay="0s" />
                        <Dot delay=".1s" />
                        <Dot delay=".2s" />
                        <Dot delay=".3s" />
                    </DotWrapper>
            </Container>
            }

        </>
    )
}

const Container = styled.div`
height: 800px;
display:flex;
justify-content: center;
align-items: center;

`
const DotWrapper = styled.div`
display: flex;
align-items: flex-end;
`
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 25px }
  100% { margin-bottom: 0 }
`;

const Dot = styled.div`

  box-shadow: 2px 2px 4px #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 5px;

  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
  `

