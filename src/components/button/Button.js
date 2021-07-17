import React from 'react'
import styled from 'styled-components'

function Button({ children, icon }) {
    return (
        <ButtonContainer>
            {children}
            <img style={{ marginLeft: 20 }} src={icon} alt='arrow'></img>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    border: none;
    width: 250px;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    background-color: #fff;
    border: 2px solid #222;
    cursor: pointer;
    transition: all 0.3s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #222;
        color: #fff;
    }
`

export default Button
