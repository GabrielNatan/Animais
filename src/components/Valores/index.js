import React, {useState, useEffect} from 'react'

import { Container } from './styled'


export default function Valores(){
    const [move, setMove] = useState(0);
    const [num, setNum] =useState(0)
    const [myInterval,setMyInterval] = useState(()=>setInterval(()=>{setNum(num =>num >= 2 ? 0 : num + 1)},4000))


    useEffect(()=>{
        let a = document.querySelector(".cont_text")
        setMove(a.offsetWidth * num)
    },[num])
    return(
        <Container move={move}>
            <div className="contValores"  >
                <div className="cont_text" >
                    <strong>Missão</strong>
                    <p>Nossa missão é resgatar e ajudar a dar um lar ao animais mais necessitados. Colaborando com uma rede de pessoas engajadas nesse projeto.</p>
                    <small>Cachorro - CEO</small>
                </div>

                <div className="cont_text">
                    <strong>Valores</strong>
                    <p>Nossa missão é resgatar e ajudar a dar um lar ao animais mais necessitados. Colaborando com uma rede de pessoas engajadas nesse projeto.</p>
                    <small>Cachorro - CEO</small>
                </div>

                <div className="cont_text">
                    <strong>Visão</strong>
                    <p>Nossa missão é resgatar e ajudar a dar um lar ao animais mais necessitados. Colaborando com uma rede de pessoas engajadas nesse projeto.</p>
                    <small>Cachorro - CEO</small>
                </div>
            </div>
        </Container>
    )
}