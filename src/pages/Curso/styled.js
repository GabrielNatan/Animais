import styled from 'styled-components'
import { colorPrimary} from '../../global'
export const Container = styled.div`
    width:100%;
    background: #000;
    
    .cont{
        width:100%;
        max-width:1440px;
        min-height:100vh;
        margin:0 auto;
        display:flex;
        flex-direction:column;
    }

    @media(min-width:1024px){
        .cont{
            flex-direction:row;
        }
    }

`