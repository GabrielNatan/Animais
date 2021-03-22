import React,{useState} from 'react'

import { Container, Cont } from './styled'
import { useDispatch,useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Menu from '../../components/menuLateral'
import Sobre from '../../components/Sobre'
import Team from '../../components/Team'


export default function HomeScreen(){
   
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.open)

   

    
    return(
        <Container>
            <Menu/>
            <Navbar/>   
            <div className="cont">
                <Banner/>
            </div>       
                <Sobre/>
            <div className="cont">
                <Team/>
            </div>     
        </Container>
    )
}