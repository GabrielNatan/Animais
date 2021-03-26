import styled from 'styled-components'
import { colorPrimary, showLeft, showRight } from '../../global'

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

            ul{
                display: none;
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

                ul{
                    display:flex;
                    width:100%;
                    height:100%;
                    align-items:center;
                    .perfil_image{
    
                        width:44px;
                        height:44px;
                        border-radius:50%;
                        margin-right:10px;
                        position:relative;
                        background: #E1E1E1;
                        :before{
                            content:"";
                            display:inline-block;
                            background: ${colorPrimary};
                            width:51px;
                            height:51px;
                            border-radius:50%;
                            position:absolute;
                            left:-3px;
                            top:-3px;
                            z-index:-3;
    
                        }
                        img{
                            width:100%;
                            border-radius:50%;
                            object-fit:cover;
                        }
                    }
    
                    strong{
                        font-size:1.1rem;
                    }
                }
                
                .bars{
                    display:none;
                }
            }
        }
    }


    @media(min-width:1100px){

        .contNav{

            nav{
                ul{
                    width:100%;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    .perfil_image{
        
                        width:50px;
                        height:50px;
                        border-radius:50%;
                        margin-right:10px;
                        position:relative;
                        background: #E1E1E1;
                        :before{
                            content:"";
                            display:inline-block;
                            background: ${colorPrimary};
                            width:56px;
                            height:56px;
                            border-radius:50%;
                            position:absolute;
                            left:-3px;
                            top:-3px;
                            z-index:-3;
        
                        }
                        img{
                            width:100%;
                            border-radius:50%;
                            object-fit:cover;
                        }
                    }
        
                    strong{
                        font-size:1.3rem;
                    }
                }
            }
        }
    }
`