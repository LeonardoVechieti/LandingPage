import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  padding-left: 10em;
  padding-right: 10em;
  font-family: 'Roboto', sans-serif;
`
const Image = styled.div`
    border-radius: 1%;
    background-color: #fff;
    padding: 6px;
    img {
        width: 100%;
        border-radius: 4%;
        min-height: 300px;
        min-width: 300px;
        max-height: 400px;
        max-width: 400px;
    }
`
const AboutContainer = styled.div`
    margin-left: 2em;
    
    h2 {
        font-size: 2.5em;
        margin-bottom: 0.5em;
    }
    h3 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }
    p {
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }
`

const About = () => {
  return (
    <AboutWrapper>
      <Image>
        <img src="https://avatars.githubusercontent.com/u/92764500?v=4"/>
      </Image>
      <AboutContainer>
        <h2>Leonardo Vechieti</h2>
        <h3>Front-end Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatum, 
          voluptate, quibusdam, quia voluptas quos dolorum quae voluptatibus quas
          consequatur. Quisquam quod voluptatum, voluptate, quibusdam, quia voluptas quos dolorum quae voluptatibus quas
          consequatur.
        </p>
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About