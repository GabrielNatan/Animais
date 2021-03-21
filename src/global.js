
import { createGlobalStyle, keyframes } from 'styled-components'
export const colorPrimary = "#BBEBEE"
export const azulEscuro = "#232946"
export const roxo = "#503E9D"
export const amarelo = "#F2CC5B"
export const rosa = "#EAB8C0"

export const showRight = keyframes`

  from{
    opacity:0;
    transform: translate(-50px);
  }

  to{
    opacity:1;
    transform: translate(0px);
  }

`

export const showLeft = keyframes`

  from{
    opacity:0;
    transform: translateX(50px);
  }

  to{
    opacity:1;
    transform: translateX(0px);
  }

`

export const showDown = keyframes`

  from{
    opacity:0;
    transform: translateY(-50px);
  }

  to{
    opacity:1;
    transform: translateY(0px);
  }

`

export const showUp = keyframes`

  from{
    opacity:0;
    transform: translateY(50px);
  }

  to{
    opacity:1;
    transform: translateY(0px);
  }

`

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Nunito', sans-serif;
    margin:0;
    padding:0;
    border:0;
    box-sizing: border-box;
  }

  body{
    background: ${colorPrimary};
    
  }
`

export default GlobalStyle