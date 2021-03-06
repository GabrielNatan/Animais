import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import { RiAliensFill, RiUser2Fill, RiLogoutCircleFill,RiArrowRightCircleLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'

export default function Banner(){

    const banners = [
        {id:0,img:"https://imagensemoldes.com.br/wp-content/uploads/2020/04/cachorro-com-fundo-transparente.png",title:"Cachorro",desc:"Venha encontra seu mais novo amigo, os cachorros são os mais fies dos amigos nunca te abandona."},
        {id:1,img:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Gato-PNG.png",title:"Gato",desc:"Os gatos são bichos muito amaveis, venha ver de perto como eles vivem."},
    ]
   
    const [contador2, setContador2] = useState(0)
    const [inter, setInter] = useState(()=> setInterval(()=>{setContador2(cont=>cont >= 1 ? 0 :cont + 1 )},3000))
    

    
    


    return(
        <Container  banner={banners.id} item={contador2} >
            {contador2 === 0 ?
                <>
                    <img src={banners[0].img } alt="banner"/>
                    <div className="text_banner">
                        <h1>{banners[0].title}</h1>
                        <p>{banners[0].desc}</p>
                        <Link to="/Login">Entrar</Link>
                    </div>
                </>
            :
                <>
                    <img src={banners[1].img } alt="banner"/>
                    <div className="text_banner">
                        <h1>{banners[1].title}</h1>
                        <p>{banners[1].desc}</p>
                        <Link to="/Login">Entrar</Link>
                    </div>
                
                </>

            }          
        </Container>
        
    )
}