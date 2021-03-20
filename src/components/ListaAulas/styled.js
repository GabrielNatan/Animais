import styled from 'styled-components'
import {colorPrimary} from '../../global'

export const Container = styled.div`
    width:100%;
    height:100vh;
    overflow:auto;
    flex:1;
    background: ${colorPrimary};
    padding:40px 20px 0;
    color: #FFF;
    .modulo{
        width:100%;
        background: #FAFAFA;
        color: #222;
        strong{
            width:100%;
            padding:5px;
            display:flex;
            justify-content:space-between;
        }
        ul{
            background: #F0379F;
            list-style:none;
            overflow:hidden;
            
            li{
                padding:5px 10px;
                cursor: pointer;
                :hover{
                    background:red;
                }
            }
        }
    }

`