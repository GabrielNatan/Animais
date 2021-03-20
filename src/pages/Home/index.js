import React,{useState} from 'react'

import { Container, Cont } from './styled'
import { useDispatch,useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'

export default function HomeScreen(){
    const [seconds,setSeconds] = useState(0)
    const [myInterval,setMyInterval] = useState(()=>setInterval(()=>{setSeconds(seconds => seconds + 1)},1000))
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.open)


    const clearInt = ()=>{
        
        clearInterval(myInterval)
    }

    const initInterval = ()=>{
        
        setMyInterval(()=>setInterval(()=>{setSeconds(seconds => seconds + 1)},1000))
    }

   

    
    return(
        <Container>
            <Navbar/>   
            <div className="cont">
                <Banner/>
            </div>            
        </Container>
    )
}