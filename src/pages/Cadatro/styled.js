import styled  from 'styled-components'

import { colorPrimary,rosa, azulEscuro,roxo,amarelo,showRight,showLeft,showDown,showUp  } from '../../global'
//background: #187459;



export const Container = styled.div`
width:100%;
height:100vh;
background: ${colorPrimary};
overflow:hidden;
    .cont{
        width:100%;
        max-width:1440px;
        min-height:100%;
        display:flex;
        margin:0 auto;
        display:flex;
        flex-direction:column;

        .login{
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            animation:${showDown} 700ms linear forwards;
            order:2;
            
            .cardLogin{
                display:flex;
                flex-direction:column;
                position:relative;
                width:80%;
                max-width:460px;
                height:80%;
                background: #FFF;
                border-radius:10px;
                padding:60px 30px;
                box-shadow:8px 8px 8px rgba(150,180,240,0.4);

                .back{
                    position:absolute;
                    text-decoration:none;
                    color:${roxo};
                    top:20px;
                    display:flex;
                    align-items:center;

                    span{
                        font-weight:bold;
                    }
                }

                .logo{
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:1.5rem;
                    margin-bottom:20px;

                    img{
                        width:45px;
                    }
                }

                .form{
                    display:flex;
                    flex-direction: column;
                    input{
                        padding:5px;
                        margin:10px 0;

                        border-bottom:1px solid #CCC;
                    }

                    button{
                        padding:10px;
                        margin-top:20px;
                        background: ${azulEscuro};
                        color: #FFF;
                        cursor:pointer;
                    }
                }

                label{
                    margin-top:5px;
                }

                .footer{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    a{
                        text-decoration:none;
                        text-align:center;
                        color: ${roxo};
                        margin-top:10px;
                        font-size:0.8rem;
                    }

                    span{
                        text-decoration:none;
                        text-align:center;
                        color: ${roxo};
                        margin-top:10px;    
                        cursor:pointer; 
                        font-size:0.8rem;

                    }
                }
            }
            .msg{
                width:360px;
                text-align:center;
                position:absolute;
                bottom:105px;
                font-size:0.8rem;
                color: ${props=>props.status ? "#187459" : "#9F0808"};
            }
        
        }
        .image{
            display:none;
            animation:${showLeft} 700ms linear forwards;

        }

    }
    
    @media(min-width:768px){
        .cont{
            flex-direction:row;
            
            .login{
                .cardLogin{
                    justify-content:center;
                    padding:60px;

                    .back{
                        top:40px;
                    }
                    .logo{
                        font-size:1.4rem;
                        margin:0;

                        img{
                            width:45px;
                        }
                    }

                    .form{
                        input{
                            padding:3px;
                            font-size:0.9rem;
                        }

                        button{
                            padding:10px;
                            font-size:1.1rem;
                        }

                    }
                    .footer{
                        a{
                            font-size:1rem;
                        }

                        span{
                            font-size:1rem;
                        }
                    }
                }

                .msg{
                    width:300px;
                    text-align:center;
                    position:absolute;
                    bottom:105px;
                    font-size:0.8rem;
                    color: ${props=>props.status ? "#187459" : "#9F0808"};
                }
            }
            

            .image{
                flex:1;
                display:flex;
                flex-direction:column;
                align-items:flex-end;
                justify-content:center;
                order:1;
                
                strong{
                    width:90%;
                    font-size:1.7rem;
                    text-align:center;
                    position:absolute;
                    top:100px;
                }
            
                img{
                    width:90%;
                }

                a{
                    font-size:0.7rem;
                    text-decoration:none;
                    color:${roxo};
                }

            }
        }
        
    }


    @media(min-width:1448px){
        .cont{
            
            .login{
                .cardLogin{
                    justify-content:center;
                    padding:60px;

                    .back{
                        top:60px;
                    }
                    .logo{
                        font-size:1.9rem;
                        margin-bottom:15px;

                        img{
                            width:65px;
                        }
                    }

                    .form{
                        input{
                            padding:10px;
                            font-size:0.9rem;
                        }

                        

                    }
                    .footer{
                        a{
                            font-size:1rem;
                        }

                        
                    }
                }

                .msg{
                    width:360px;
                    text-align:center;
                    position:absolute;
                    bottom:105px;
                    font-size:1.1rem;
                    color: ${props=>props.status ? "#187459" : "#9F0808"};
                }
            }
            

        }
    }
`