import React from 'react'
import {
    IconContainer,
    ListItem,
    NavbarContainer,
    NavbarContent,
    NavList,
} from './navbar.styles'
import Icon from '../../assets/mspicon.png'
import { Link } from 'gatsby'

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarContent>
                <IconContainer>
                    <img src={Icon} alt='msp430'></img>
                </IconContainer>
                <NavList>
                    <ListItem>
                        <Link to='/'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/projects'>Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/contributers'>Contributers</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/about'>About</Link>
                    </ListItem>
                </NavList>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
