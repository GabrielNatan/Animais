import styled from 'styled-components'
import {  colorPrimary,rosa, azulEscuro,roxo,amarelo,showRight,showLeft,showDown,showUp } from '../../global'

export const Container = styled.div`
width:100%;
height:400px;
background:${amarelo};
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-end;
margin:50px 0;
border-radius:20px;
position:relative;
img{
    width:100%;
    max-width:260px;
    top:-60px;
    z-index:0;
    position:absolute;
    animation: ${showRight} 200ms linear forwards;
    transition:200ms;
    opacity:${props => props.banner === props.item ? "1" : "0"};
}
.text_banner{
    width:100%;
    height:50%;
    color:#222;
    background:${`#FFF`};
    padding:10px;
    border-radius:20px;
    z-index:1;

    p{
        font-size:0.9rem;
        margin-bottom:15px;
    }

    a{
        text-decoration:none;
        font-weight:bold;
        color:${roxo};
        border:2px solid ${roxo};
        border-radius:20px;
        padding:5px 10px;
        font-size:1rem;
    }
}




@media (min-width: 768px) {
    height:300px;
    background:${amarelo};

    flex-direction:row;
    padding:0 60px;
    align-items:center;
    justify-content:flex-end;
    margin:60px 0;
    position:relative;
    
    img{
        width:50%;
        max-width:300px;
        top:-70px;
        left:30px;
    
    }
    .text_banner{
        width:50%;
        height:70%;
        padding:20px;
    
    }
  
}

@media (min-width: 1024px) {
    height:360px;

    padding:0 60px;
    align-items:center;
    justify-content:flex-end;
    margin:60px 0;
    position:relative;
    
    img{
        width:50%;
        max-width:370px;
        top:-70px;
        left:50px;
    
    }
    .text_banner{
        width:50%;
        height:70%;
        padding:20px;
        
        p{
            margin:10px 0 20px 0;
            font-size:1.3rem;
        }

        a{
            font-size:1.3rem;
            padding:10px 30px;
            border-radius:40px;
        }
    }
  
}

@media (min-width: 1440px) {
    height:360px;

    padding:0 60px;
    align-items:center;
    justify-content:flex-end;
    margin:100px 0;
    position:relative;
    
    img{
        width:50%;
        max-width:400px;
        top:-90px;
        left:80px;
    
    }
    .text_banner{
        width:50%;
        height:70%;
        padding:40px;
        
        p{
            margin:10px 0 20px 0;
            font-size:1.3rem;
        }

        a{
            font-size:1.3rem;
            padding:10px 30px;
            border-radius:40px;
        }
    }
}
`