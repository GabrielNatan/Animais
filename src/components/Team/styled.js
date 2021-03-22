import styled from 'styled-components'
import {  colorPrimary,rosa, azulEscuro,roxo,amarelo,showRight,showLeft,showDown,showUp } from '../../global'

export const Container = styled.div`
width:100%;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;

h1{
    margin:20px 0;
}


.contTeam{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    .card_team{
        width:100%;
        max-width:360px;
        margin:0 auto;
        margin-bottom:10px;
        padding:25px 10px;
        background:#FFF;
        display:flex;
        flex-direction:column;
        border-radius:10px;
        cursor:pointer;

        .card_img{
            width:90px;
            height:90px;
            background:${rosa};
            margin:0 auto;
            border-radius:50%;
            margin-bottom:15px;
            overflow:hidden;
            img{
                width:100%;
            }
        }

        .card_desc{
            display:flex;
            flex-direction:column;
            text-align:center;

            span{
                font-size:.9rem;
                margin:5px 0;
            }

            a{
                text-decoration:none;
                color:${azulEscuro};
                font-size:1.7rem;
                margin:0 5px;
            }
        }
    }
}


@media (min-width: 768px) {
    background:${amarelo};
    display:block;
    padding:0 60px;
    align-items:center;
    justify-content:flex-end;
    margin:60px 0;
    position:relative;
    border-radius:20px;

    .contTeam{
        flex-direction:row;

        .card_team{
            height:auto;

            :nth-child(2){
                margin:0 20px 8px 20px;
            }

        }

    }
  
}

@media (min-width: 1024px) {

    padding:40px;
    padding-top:10px;
    align-items:center;
    justify-content:flex-end;
    margin:60px 0;
    position:relative;

    .contTeam{
        padding:0px;

        .card_team{
            height:auto;

            :nth-child(2){
                margin:0 20px 8px 20px;
            }

        }

    }
   
}

@media (min-width: 1440px) {

    padding:30px;
    align-items:center;
    justify-content:flex-end;
    margin:100px 0;
    position:relative;
    
    
}
`