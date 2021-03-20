import styled from 'styled-components'
import {colorPrimary} from '../../global'
export const Container = styled.aside`
    width:${props=>props.open ? "100%" : "70px"};
    max-width:320px;
    height:100vh;
    position: absolute;
    left:${props=>props.open ? "0" : "-70px"};
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    background: ${colorPrimary};
    overflow:hidden;
    color:#FFF;
    transition:300ms;
   
    .open{
        position:fixed;
        left:${props=>props.open ? "270px" : "25px"};
        top:20px;
        cursor:pointer;
        transition:450ms;
        transform: rotate(${props=>props.open ? "180deg" : "0deg"})
    }

    nav{
        flex:1;
        width:100%;
        display:flex;
        flex-direction:column;
        overflow:hidden;
        padding:30px 0;
        transition:300ms;


        a{
            padding:10px 12px;
            width:300px;
            text-decoration: none;
            color:#FFF;
            display:flex;
            align-items:center;
            border-radius:5px;
            overflow:hidden;

            strong{
                margin:0 15px;
            }
            :hover{
                background: #404040;
            }
        }
    }

    .sair{
        flex:1;
        width:100%;
        display:flex;
        justify-content:flex-end;
        align-items: flex-end;
        
        .logout{
            cursor:pointer;

        }
    }

    @media (min-width: 768px) {
        position: initial;

        .open{
            position:fixed;
            left:${props=>props.open ? "270px" : "55px"};
            top:20px;
            cursor:pointer;
            transition:450ms;
            transform: rotate(${props=>props.open ? "180deg" : "0deg"})
        }
        
      }

`