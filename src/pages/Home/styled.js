import styled from 'styled-components'
import { colorPrimary } from '../../global'
export const Container = styled.main`
    width:100%;
    background: ${colorPrimary};
   


    .cont{
        width:100%;
        max-width:1448px;
        min-height:100vh;
        margin: 0 auto;
        padding:0 40px;
    }

    @media (min-width: 768px) {
        .cont{
            padding:0 60px;

        }
    }
`


  
