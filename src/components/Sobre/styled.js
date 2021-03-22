import styled from 'styled-components'
import { colorPrimary, azulEscuro, roxo, amarelo, rosa } from '../../global'


export const Container = styled.section`

        width:100%;
        background: ${`#F7FEFE;`};
        .contSobre{
            width:100%;
            max-width:1440px;
            height:100%;
            margin:0 auto;
            display:flex;
            padding:40px;
            flex-direction:column;
        
            .text_sobre{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:flex-start;
        
                h2{
                    font-size:2rem;
                    margin-bottom:15px;
                        ::after{
                            content:"";
                            display:block;
                            width:30%;
                            height:5px;
                            background: red;
            
                        }   
                }
        
                p{
                    font-size:1.3rem;
                }
            }
        
            .img_sobre{
                flex:1;
                display:flex;
                justify-content:center;
                align-items:center;
        
                img{
                    width:100%;
                    object-fit:cover;
                }
            }
        }

@media(min-width:768px){
        height:100vh;
        .contSobre{
            flex-direction:row;
            padding:0 60px;
        
            .text_sobre{
        
                h2{
                    font-size:3rem;
                }

            }
        }

    }

    @media(min-width:1024px){
        .contSobre{
        
            .text_sobre{
        
                h2{
                    font-size:4rem;
                }
        
                p{
                    font-size:1.9rem;
                }
            }
        }

    }
`