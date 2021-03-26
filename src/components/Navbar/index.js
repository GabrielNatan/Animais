import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaLogout } from 'react-icons/fa'
import { FcLogo } from 'react-icons/fc'
import { Container } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../logo.svg'
export default function Navbar(){
    const dispatch = useDispatch()
    const open = useSelector(state=>state.menu.open)
    const userLog = useSelector(state => state.loggedUser.user)

    const location = useLocation()

    
    return(
        <Container>
            
           
            <div className="contNav">
                <div className="logoNav">
                    <img src={Logo} alt="logo"/> Doguíneo
                </div>
                {
                    location.pathname !== '/' ?
                    <nav>
                        <ul>
                            <div className="perfil_image">
                                <img src="https://www.atlassian.com/br/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="Imagem de perfil"/>
                            </div>
                            <strong>{userLog ? `${userLog.name}  ${userLog.sobrenome}`: null }</strong>
                        </ul>

                    </nav>
                    :
                    <nav>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Cadastrar</Link>
                        <FaBars onClick={()=>dispatch({type:"OPEN_MENU"})} className="bars" size={25}/>
                    </nav>
                }
                
            </div>
        </Container>
    )
}