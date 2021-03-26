import styled from 'styled-components'
import { colorPrimary, amarelo, rosa, roxo, azulEscuro} from '../../global'
export const Container = styled.div`
    width:100%;
    background: ${colorPrimary};
    display:flex;
    flex-direction:column;

    
        
    .section{
        height: auto;
    }

    .banner_perfil{
        width:80%;
        height:300px;
        margin:60px auto;
        border-radius:20px;
        background:${amarelo};
        display:flex;
    
        .perfil_left{
            flex:2;
            padding:40px 60px;
            display:flex;
            flex-direction:column;
            justify-content:center;

            strong{
                font-size:2.5rem;
                span{
                    color:${roxo};
                }
            }
            p{
                font-size:2rem;
                :nth-child(3){
                    margin-bottom:10px;
                }
            }

            a{
                max-width:160px;
                padding:20px;
                text-decoration:none;
                color:${rosa};
                font-size:1.1rem;
                background:${roxo};
                font-weight:bold;
                border-radius:30px;
                text-align:center;
            }
            
            
        }
        

        .perfil_right{
            flex:1;
            position:relative;

            img{
                height:330px;
                position:absolute;
                bottom:-2px;
            }

        }
    }

    
    
    .cards_perfil{
        width:80%;
        margin:0 auto 60px auto;
        padding:10px;
        border-radius:20px;
        background: ${"#F7FEFE"};
        display:grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        .cards{
            height:200px;
            background:${rosa};  
            border-radius:10px;
            display:flex;
            flex-direction:column;

            
                strong{
                    font-size:1.9rem;
                    text-align:center;
                    flex:1;
                }
                
                span{
                    font-size:7rem;
                    font-weight:bold;
                    color: #FFF;
                }

                .number{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    position:relative;
                    flex:2;
                    overflow:hidden;
                    img{
                        width:95px;
                        height:95px;
                        position:absolute;
                        bottom:-30px;
                        right:-30px;
                    }
                }
            
        }

    }

    .animais{
        width:80%;
        height:600px;
        background:${"#F7FEFE"};
        margin:0 auto 60px;
    }

    @media(min-width:1024px){
        .section{
            flex-direction:column;
            width:100%;
            max-width:1440px;
            margin:0 auto;
            display:flex;
        }        
    }

`