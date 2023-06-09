import React from 'react'
import { NavLink } from 'react-router-dom'
//instala o styled-components
//yarn add styled-components
//importa o styled-components
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: end;
    padding-top: 1.5em;
    padding-left: 10em;
    padding-right: 10em;
    padding-bottom: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

`

const Nav = styled.nav`
    
    
    ul {     
        display: flex;
        justify-content: space-between;
        list-style: none;  
        /* para não quebrar a linha */
        white-space: nowrap;
    }
    
`


const NavBar = () => {
    return (
        <Header>
            <Nav>
                <ul>
                    <li>
                        <NavLink to="/" className={"primary-button"}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={"primary-button"}> About </NavLink>
                    </li>
                </ul>
            </Nav>
        </Header>

    )
}

export default NavBar