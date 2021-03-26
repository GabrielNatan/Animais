import styled from 'styled-components'

import { azulEscuro } from '../../global'
export const Container = styled.section`

    width:100%;
    background:${`#F7FEFE`};
    padding:30px 0;
    display:flex;
    justify-content:center;
    .contValores{
        width:100%;
        max-width:1440px;
        padding:40px 0;
        display:flex;
        overflow:hidden;

        .cont_text{
            min-width:100%;
            padding:0 40px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            text-align:center;
            color:${azulEscuro};
            transition:300ms;
            position:relative;
            right:${props => props.move}px;
            margin: 0 auto;

            strong{
                font-size:1.9rem;
                margin:0 0 10px 0;
            }
            p{
                font-size:1rem;
                margin:0 0 10px 0;
                width:100%;
                max-width:700px;
            }

            small{
                font-size:0.7rem;
                margin:0 0 10px 0;
            }
        }
    }


`

