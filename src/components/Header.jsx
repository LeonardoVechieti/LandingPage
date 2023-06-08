import React from 'react'
import styled from 'styled-components'

const Header = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    margin-top: 70px;
    h2 {
        margin: 5px;
    }
    h1 {
        margin: 5px;
        font-size: 5rem;
    }
    h3 {
        margin: 5px;
        font-size: 2rem;
    }

`
export default () => {
    return (
        <Header>
            <h2>Eu sou</h2>
            <h1>Leonardo Vechieti</h1>
            <h3>Desenvolvedor Full Stack</h3>
        </Header>
    )
}

