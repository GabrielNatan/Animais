import React,{useState} from 'react'

import { Container, Cont } from './styled'
import { useDispatch,useSelector } from 'react-redux'


export default function HomeScreen(){
    const [seconds,setSeconds] = useState(0)
    const [myInterval,setMyInterval] = useState(()=>setInterval(()=>{setSeconds(seconds => seconds + 1)},1000))
    
    const dispatch = useDispatch();
    const name = useSelector(state => state.clickState.newValue)


    const clearInt = ()=>{
        
        clearInterval(myInterval)
    }

    const initInterval = ()=>{
        
        setMyInterval(()=>setInterval(()=>{setSeconds(seconds => seconds + 1)},1000))
    }

   

    
    return(
        <Container>
                
        </Container>
    )
}