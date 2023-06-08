import React from 'react'
import Header from '../components/Header'
import Social from '../components/Social'
import Button from '../components/Button'



const Home = () => {
    return (
        <>
            <Header />
            <Social />

            <Button name='CONTACT ME' />
            <Button name='DOWLOAD CV' />
        </>

    )
}

export default Home