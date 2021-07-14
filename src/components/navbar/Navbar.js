import React from 'react'
import {
    IconContainer,
    ListItem,
    NavbarContainer,
    NavbarContent,
    NavList,
} from './navbar.styles'
import Icon from '../../assets/mspicon.png'

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarContent>
                <IconContainer>
                    <img src={Icon}></img>
                </IconContainer>
                <NavList>
                    <ListItem>Home</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Contributers</ListItem>
                    <ListItem>About</ListItem>
                </NavList>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
