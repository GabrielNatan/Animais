import styled from 'styled-components'
import {colorPrimary, rosa, roxo, azulEscuro,amarelo} from '../../global'

export const Container = styled.aside`
    width:100%;

    background:${roxo};
    .cont_animais{
        padding:0 60px;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        .card_animais{
            
            padding:5px;
            background:#FFF;
            display:flex;
            flex-direction:column;
    
            img{
                width:100%;
                height:150px;
            }
    
            .desc_animal{
                display:flex;
                flex-direction:column;
            }
    
            .btn_animal{
                padding:5px;
                font-size:1.1rem;
                font-weight:bold;
                color:${amarelo};
                background: ${roxo};
                border-radius:5px;
                cursor:pointer;
            }
        }
    
    }
    
    

    @media (min-width: 768px) {
       
        
    }

`