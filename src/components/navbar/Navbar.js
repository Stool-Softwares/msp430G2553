import React, { Fragment, useState } from 'react'
import {
    IconContainer,
    ListItem,
    NavbarContainer,
    NavbarContent,
    NavList,
    NavListWrapper,
    OpenedMenu,
} from './navbar.styles'
import Icon from '../../assets/mspicon.png'
import { Link } from 'gatsby'
import { useMediaQuery } from '@material-ui/core'
import HamMenu from '../../assets/ham.png'

function Navbar() {
    const [open, isOpen] = useState(false)
    const matches = useMediaQuery('(min-width:840px)')

    let linksList = (
        <Fragment>
            <ListItem className='home'>
                <Link to='/'>Home</Link>
            </ListItem>
            <ListItem className='projects'>
                <Link to='/projects'>Projects</Link>
            </ListItem>
            <ListItem className='contri'>
                <Link to='/contributers'>Contributers</Link>
            </ListItem>
            <ListItem className='about'>
                <Link to='/about'>About</Link>
            </ListItem>
        </Fragment>
    )

    return (
        <NavbarContainer>
            <NavbarContent>
                <IconContainer>
                    <img src={Icon} alt='msp430'></img>
                </IconContainer>
                {!matches ? (
                    <Fragment>
                        <NavListWrapper>
                            <img
                                onClick={() => isOpen((prev) => !prev)}
                                src={HamMenu}
                                alt='menu'
                            />
                        </NavListWrapper>
                        <Fragment>
                            {open ? (
                                <OpenedMenu>{linksList}</OpenedMenu>
                            ) : (
                                <div style={{ display: 'none' }}></div>
                            )}
                        </Fragment>
                    </Fragment>
                ) : (
                    <NavList>{linksList}</NavList>
                )}
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
