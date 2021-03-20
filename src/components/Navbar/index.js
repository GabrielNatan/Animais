import React from 'react'
import { FaBars, FaClosedCaptioning } from 'react-icons/fa'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Logo from '../../logo.svg'
export default function Navbar(){
    const open = useSelector(state => state.menu.open)
    const dispatch = useDispatch()

    const toggleMenu = ()=>{
        dispatch({type:"OPEN_MENU"})
    }

    return(
        <Container open={open}>
            <div className="contNav">
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="logo"/> Dogneo</Link>
                </div>
                <nav>
                    <div className="navbar">
                        <FaClosedCaptioning  onClick={()=>dispatch({type:"CLOSE_MENU"})} className="close"  size={25}/>
                        <Link to="/login">Logar</Link>
                        <Link to="/register">Cadastrar</Link>
                    </div>
                    <FaBars onClick={()=>dispatch({type:"OPEN_MENU"})} className="bars" size={25}/>
                </nav>
            </div>
        </Container>
    )
}