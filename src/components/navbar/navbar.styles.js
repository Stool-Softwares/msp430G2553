import styled from 'styled-components'

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

    &:hover {
        text-decoration: underline;
    }
`
