import styled from 'styled-components'
import {  colorPrimary,rosa, azulEscuro,roxo,amarelo,showRight,showLeft,showDown,showUp } from '../../global'

export const Container = styled.div`
width:100%;
height:400px;
background:${`#FFF`};
display:flex;
flex-direction:column;
align-items:center;
margin:50px 0;
border-radius:20px;

.title{
    width:50%;
    height:100%;
    order:2;
    flex:1;
}

.image{
    width:50%;
    height:50%;
    order:1;
    background:#F00;
    img{
        width:130%;
        object-position:bottom;
    }
}



@media (min-width: 768px) {
  
  
}
`