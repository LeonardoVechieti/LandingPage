import React from 'react'
import styled from 'styled-components'
import Linkedin from '../logos/Linkedin'
import Github from '../logos/Github'
import Facebook from '../logos/Facebook'




const SocialWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    a {
        margin: 0 10px;
    }
`

const Social = () => {
    return (
        <SocialWrapper>
            <a href="https://www.linkedin.com/in/leonardo-vechieti-a111a8238/">
                <Linkedin />
            </a>
            <a href="https://github.com/LeonardoVechieti">
                <Github />
            </a>
            <a href="https://www.instagram.com">
                <Facebook />
            </a>

        </SocialWrapper>
    )
}

export default Social