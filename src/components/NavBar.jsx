import React from 'react'
import { NavLink } from 'react-router-dom'
//instala o styled-components
//yarn add styled-components
//importa o styled-components
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: end;
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