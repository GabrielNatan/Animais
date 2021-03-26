import React from 'react'

import { Container } from './styled'
import Logo from '../../logo.svg'
export default function Footer(){
    return(
        <Container>
                <p>&copy;  Todos os direitos reservasos a Doguíneo <img src={Logo} alt="logo"/></p>
        </Container>
    )
}