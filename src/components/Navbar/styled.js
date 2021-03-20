import styled from 'styled-components'
import {  colorPrimary,rosa, azulEscuro,roxo,amarelo,showRight,showLeft,showDown,showUp } from '../../global'

export const Container = styled.div`
    width:100%;
    background:${`#FFF`};
   
    
    .contNav{
        width:100%;
        max-width:1448px;
        height:80px;
        background:${`#FFF`};
        display:flex;
        flex-direction:row;
        padding:40px;
        margin:0 auto;
        .logo{
            flex:1;
            display:flex;
            align-items:center;
            font-weight:bold;
            font-size:1.2rem;
            animation: ${showRight} 300ms linear forwards; 

            a{
                display:flex;
                align-items:center;
                text-decoration:none;
                color:${roxo};
                img{
                    width:45px;
                }
            }
        }
    
        nav{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            animation: ${showLeft} 300ms linear forwards; 
            .navbar{
                position:fixed;
                display:flex;
                flex-direction:column;
                width:100%;
                max-width:360px;
                min-height:100vh;
                transition: 500ms;
                top:0;
                right:${props=> props.open ? "0px":"-360px"};
                padding:60px;
                background: ${azulEscuro};
                z-index:1000;
                .close{
                    color:#FFF;
                    position:absolute;
                    top:20px;
                    right:20px;
                    cursor:pointer;
                }
                a{
                    text-decoration:none;
                    color:${rosa};
                    font-size:1.3rem;
                    font-weight:bold;
                    paddind:10px;
                }
            }
        }
    }

    

    @media (min-width: 768px) {
      .contNav{

          .logo{
            font-weight:bold;
            font-size:1.9rem;
            a{
                img{
                    width:60px;
                }
            }
          }
        nav{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            .bars{
                display:none;
            }
            .navbar{
                position:initial;
                display:flex;
                flex-direction:row;
                justify-content: flex-end;
                width:100%;
                max-width:100%;
                min-height:auto;
                right:${props=> props.open ? "0px":"-360px"};
                padding:0px;
                background: ${`transparent`};
                z-index:0;
                .close{
                    display:none;
                }
            
                a{
                    text-decoration:none;
                    color:${azulEscuro};
                    font-size:1rem;
                    padding:10px 30px;
                    border: 3px solid ${azulEscuro};
                    border-radius:45px;
                    margin:0 5px;

                    :hover{
                        background: ${azulEscuro};
                        color:#FFF;
                    }
                    
                }
            }
        }
      }
      
    }
`