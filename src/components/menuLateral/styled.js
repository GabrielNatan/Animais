import styled from 'styled-components'
import { azulEscuro, amarelo, roxo, rosa} from '../../global'
export  const Container = styled.div`
    position:fixed;
    right:${props=>props.open ? "0" : "-360px"};
    top:0;
    width:100%;
    max-width:360px;
    height:100vh;
    padding:60px;
    background: ${roxo};
    transition: 300ms;
    z-index:2;


    nav{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        
        a{
            text-decoration:none;
            font-weight:bold;
            padding:8px 0;
            color:#FFF;
        }
    }
    .close{
        position:absolute;
        top:15px;
        right:15px;
        color: #FFF;
    }
`