import styled from 'styled-components'
import { showLeft, showRight } from '../../global'

export const Container = styled.div`
    width:100%;
    height:70px;

    .contNav{
        width:100%;
        max-width:1440px;
        height:70px;
        background:#FFF;
        margin:0 auto;
        padding:0 40px;
        display:flex;

        .logoNav{
            flex:2;
            display:flex;
            align-items:center;
            font-weight:bold;
            font-size:1.2rem;
            animation:${showRight} 300ms linear forwards;
            img{
                width:45px;
            }
        }

        nav{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            animation:${showLeft} 300ms linear forwards;

            a{
                display:none;
            }
            
        }
    }

    @media(min-width:768px){
        background: #FFF;
        .contNav{
            .logoNav{
                font-size:1.9rem;
                img{
                    width:60px;
                }
            }
            nav{
                a{
                    display:initial;
                    text-decoration:none;
                    padding:10px 30px;
                    border-radius:45px;
                    border:3px  solid #222;
                    font-weight:bold;
                    margin:0 5px;
                    :hover{
                        background:#222;
                        color:#FFF;
                    }
                }
                
                .bars{
                    display:none;
                }
            }
        }
    }
`