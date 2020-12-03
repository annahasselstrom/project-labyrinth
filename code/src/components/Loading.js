
import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Loading = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return (
        <>
       
            {isLoading &&  
            
            <Container> 
                
                
            !!LOADING!! 
                
            </Container>
                
            }
           
        </>
    )
}

const Container = styled.div`
border: red solid 2px;
height: 200px;
`