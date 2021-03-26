import React,{useEffect, useState} from 'react'

import { Container } from './styled'
import { useDispatch,useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Menu from '../../components/menuLateral'
import Sobre from '../../components/Sobre'
import Team from '../../components/Team'
import Valores from '../../components/Valores'
import Depoimentos from '../../components/Depoimentos'
import Footer from '../../components/Footer'

export default function HomeScreen(){

    /*const [contador2, setContador2] = useState(1)
    const [inter, setInter] = useState(()=> setInterval(()=>{setContador2(cont=>cont >= 2 ? 1 :cont + 1 )},2000))
    

    const clearInt = ()=>{
        clearInterval(inter)
    }
    const startInt = ()=>{
        setInter(()=> setInterval(()=>{setContador2(cont=>cont >= 2 ? 1 :cont + 1 )},2000))
    }
    */
    
   
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.open)

   

    
    return(
        <Container>
            <Menu/>
            <Navbar  />   
            <div className="cont">
                <Banner/>
            </div>       
                <Sobre/>
            <div className="cont">
                <Team/>
            </div>    
            <Valores/> 
            <Depoimentos/>
            <Footer/>
        </Container>
    )
}