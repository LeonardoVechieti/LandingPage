import React from 'react'
import Header from '../components/Header'
import Social from '../components/Social'
import Button from '../components/Button'
import styled from 'styled-components'

const Home = styled.div`
    padding-top: 3em;
    padding-left: 10em;
    padding-right: 10em;
    padding-bottom: 3em;
    
`
const contact = () => {
    console.log('contato')
}
const dowload = () => {
    console.log('dowload')
}

export default () => {
    return (
        <Home>
            <Header />
            <Social />
            <Button name='CONTACT ME' style="secondary-button" onChange={contact} />
            <Button name='DOWLOAD CV' style="secondary-button" onChange={dowload}/>
        </Home>

    )
}

