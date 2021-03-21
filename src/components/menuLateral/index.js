import React from 'react'

import { MdClose} from 'react-icons/md'
import { Container } from './styled'

import { useSelector, useDispatch } from 'react-redux'


export default function MenuLateral(){
    const dispatch = useDispatch()
    const open = useSelector(state=>state.menu.open)

    return(
        <Container open={open}>
            <MdClose onClick={()=>dispatch({type:"CLOSE_MENU"})} className="close" size={25}/>
        </Container>
    )
}