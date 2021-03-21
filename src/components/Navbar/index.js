import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Container } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../logo.svg'
export default function Navbar(){
    const dispatch = useDispatch()
    const open = useSelector(state=>state.menu.open)
    return(
        <Container>
            <div className="contNav">
                <div className="logoNav">
                    <img src={Logo} alt="logo"/> Doguíneo
                </div>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Cadastrar</Link>
                    <FaBars onClick={()=>dispatch({type:"OPEN_MENU"})} className="bars" size={25}/>
                </nav>
            </div>
        </Container>
    )
}