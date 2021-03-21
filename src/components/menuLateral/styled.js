import styled from 'styled-components'

export  const Container = styled.div`
    position:fixed;
    right:${props=>props.open ? "0" : "-360px"};
    top:0;
    width:100%;
    max-width:360px;
    height:100vh;
    padding:60px;
    background: #F0F;
    transition: 300ms;

    .close{
        position:absolute;
        top:15px;
        right:15px;
        color: #FFF;
    }
`