import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    margin: 0;
    height: 140px;
    width: 100%;
    /* Fixa no fim da pagina */
    bottom: 0;
    position: relative;
`
const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    
`

export default () => {
  return (
    <Footer>
        <Copyright>Leonardo Vechieti &copy; 2023</Copyright>
        <Social />
    </Footer>
  )
}
