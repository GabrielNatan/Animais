import styled from 'styled-components'

import {rosa, azulEscuro,amarelo} from '../../global'

export const Container = styled.footer`

    width:100%;
    padding:15px;
    text-align:center;
    background: ${azulEscuro};
    p{
        color:${amarelo};
        font-size:1.1rem;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        img{
            width:20px;
            margin:5px;
        }
    }

`