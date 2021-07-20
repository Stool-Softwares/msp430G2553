import React, { Fragment, useState } from 'react'
import {
    IconContainer,
    ListItem,
    NavbarContainer,
    NavbarContent,
    NavList,
    NavListWrapper,
    OpenedMenu,
    ProjectsMenu,
} from './navbar.styles'
import Icon from '../../assets/mspicon.png'
import { Link } from 'gatsby'
import { useMediaQuery } from '@material-ui/core'
import HamMenu from '../../assets/ham.png'

function Navbar({ path, posts }) {
    const [open, isOpen] = useState(false)
    const matches = useMediaQuery('(min-width:840px)')
    const matchesProjects = useMediaQuery('(min-width:1140px)')

    if (posts) {
        posts = posts.filter(function removeDefaultPage(post) {
            return post.node.frontmatter.slug !== '/projects'
        })
    }

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

    let homeSmallScreenMenu = (
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
    )

    let projectsSmallScreenMenu = (
        <Fragment>
            <NavListWrapper>
                <img
                    onClick={() => isOpen((prev) => !prev)}
                    src={HamMenu}
                    alt='menu'
                />
                {open && (
                    <div
                        className='backdrop'
                        onClick={() => isOpen((prev) => !prev)}
                    ></div>
                )}
            </NavListWrapper>
            <Fragment>
                {open ? (
                    <ProjectsMenu>
                        <div style={{ width: '100%' }}>
                            <div
                                style={{
                                    backgroundColor: '#eee',
                                    height: 40,
                                    display: 'flex',
                                    padding: '0 40px 0 40px',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                }}
                            >
                                Menu
                            </div>
                            {linksList}
                        </div>
                        <div style={{ width: '100%' }}>
                            <div
                                style={{
                                    backgroundColor: '#eee',
                                    height: 40,
                                    display: 'flex',
                                    padding: '0 40px 0 40px',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                }}
                            >
                                Projects
                            </div>
                            {posts &&
                                posts.map((post) => (
                                    <div
                                        key={post.node.id}
                                        style={{
                                            padding: '10px 40px 10px 40px',
                                            borderBottom: '1px solid #eee',
                                        }}
                                    >
                                        <a href={post.node.frontmatter.slug}>
                                            {post.node.frontmatter.title}
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </ProjectsMenu>
                ) : (
                    <div style={{ display: 'none' }}></div>
                )}
            </Fragment>
        </Fragment>
    )

    return (
        <NavbarContainer>
            <NavbarContent>
                <IconContainer>
                    <img src={Icon} alt='msp430'></img>
                </IconContainer>
                {!matchesProjects && path && path.includes('/projects') ? (
                    <Fragment>{projectsSmallScreenMenu}</Fragment>
                ) : (
                    <Fragment>
                        {!matches ? (
                            <Fragment>{homeSmallScreenMenu}</Fragment>
                        ) : (
                            <NavList>{linksList}</NavList>
                        )}
                    </Fragment>
                )}
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
