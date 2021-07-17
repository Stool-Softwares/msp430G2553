import styled, { keyframes } from 'styled-components'

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0px 1px 4px 4px #00000010;
`

export const NavbarContent = styled.div`
    width: 80%;
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`

export const IconContainer = styled.div`
    width: 70px;
    height: 70px;
    ${flexCenter}
`

export const NavList = styled.ul`
    height: 70px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    list-style: none;
`

export const ListItem = styled.li`
    margin-right: 50px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #222;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const NavListWrapper = styled.div`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;

    img {
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background-color: #eee;
        }
    }
`

const dropIn = keyframes`
from {
    top: 60px;
    opacity: 0;
}
to {
    top: 70px;
    opacity: 1;
}
`

const slideIn = keyframes`
from {
    margin-right: 20px;
    opacity: 0;
}
to {
    margin-right: 0px;
    opacity: 1;
}
`

export const OpenedMenu = styled.div`
    list-style: none;
    position: absolute;
    background-color: #fff;
    top: 72px;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    padding: 30px;
    box-shadow: 0px 4px 4px 3px #00000030;
    animation: ${dropIn} 0.3s ease-in;

    li {
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
        opacity: 0;
        animation-fill-mode: forwards !important;
    }

    .home {
        animation: ${slideIn} 0.3s ease-in 0s;
    }

    .projects {
        animation: ${slideIn} 0.3s ease-in 0.1s;
    }

    .contri {
        animation: ${slideIn} 0.3s ease-in 0.3s;
    }

    .about {
        animation: ${slideIn} 0.3s ease-in 0.4s;
    }
`
