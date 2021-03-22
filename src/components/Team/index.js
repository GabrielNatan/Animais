import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import { RiFacebookBoxFill,RiInstagramFill,RiTwitterFill } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'

export default function Banner(){

    const team = [
        {id:0,img:"https://imagensemoldes.com.br/wp-content/uploads/2020/04/cachorro-com-fundo-transparente.png",name:"Cachorro",work:"CEO|Desenvolvedor Front-End"},
        {id:1,img:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Gato-PNG.png",name:"Gato",work:"CEO"},
        {id:1,img:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Gato-PNG.png",name:"Gato",work:"|Desenvolvedor Back-End"},
    ]
    


    return(
        <Container >
            <h1>Nosso Time</h1>
            <div className="contTeam">
                {
                    team.map(cada=>{
                        return(
                            <>
                                <div key={cada.id} className="card_team">
                                    <div className="card_img">
                                        <img src={cada.img} alt="foto de perfil"/>
                                    </div>
                                    <div className="card_desc">
                                        <strong>{cada.name}</strong>
                                        <span>{cada.work}</span>
                                        <div className="redes">
                                            <Link to="/"><RiFacebookBoxFill/></Link>
                                            <Link to="/"><RiInstagramFill/></Link>
                                            <Link to="/"><RiTwitterFill/></Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }    
            </div>    
        </Container>
        
    )
}