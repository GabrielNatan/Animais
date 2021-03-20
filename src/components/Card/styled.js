import styled from 'styled-components'
import {colorPrimary} from '../../global'

export const Container = styled.div`
    width:100%;
    max-width:150px;
    height:250px;
    background: ${colorPrimary};
    padding:5px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    cursor:pointer;
    color:#FFF;
    strong{
        text-align:center;
    }
    .prof{
        text-align:center;
        font-size: .9rem;
    }
    .img{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .rodape{
        display:flex;

        span{
            flex:1;
            display:flex;
            :nth-child(2){
                justify-content:flex-end;
            }
        }
    }

`