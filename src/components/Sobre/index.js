import React from 'react'

import { Container } from './styled'
import  Imagem from './doacao.png'

export default function Sobre(){
    return(
        <Container>
            <div className="contSobre">
                <div className="text_sobre">
                    <h2>Sobre Nós</h2>

                    <p>Esse texto é para explicar o que a gente faz, vou tentar ser breve. Mas preciso muito de gastar alguns caracteres para planejar os espaços que vou utilizar.</p>
                    
                </div>
                <div className="img_sobre">
                    <img src={Imagem} alt="imagem"/>
                </div>
            </div>
        </Container>
    )
}

