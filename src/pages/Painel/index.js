import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import {  useDispatch, useSelector } from 'react-redux'
import Firebase from '../../firebase'
import {FaPaw} from 'react-icons/fa'
import { useHistory, Link} from 'react-router-dom'
import Navbar from '../../components/Navbar' 
import Footer from '../../components/Footer' 
import Animais from '../../components/Animais' 

import Um from './um.png'
import Dois from './dois.png'
import Animal from './animal.svg'
import Pessoas from './pessoas.svg'
import Ongs from './casa.svg'
export default function CursoScreen(){
    const history = useHistory()
    const dispatch = useDispatch()
    const userLog = useSelector(state => state.loggedUser.user)
    const [user, setUser] = useState()

    const loggedReducer = (id)=>{
        Firebase.infoUser(id)
        .then(res => dispatch({type:"LOGGED", payload:{user:res}}) )
    }

    useEffect(()=>{
        Firebase.isInitialized()
            .then(res=> setUser(res.uid))
            .then(loggedReducer(user))
            .catch(err => history.push('/painel'));
    })
    return(
        <Container>
            <Navbar/>
            <section className="section">
                <div className="banner_perfil">
                    <div className="perfil_left">
                        <strong>Olá,<span> {userLog ? `${userLog.name} ${userLog.sobrenome}`:null}</span>.</strong>
                        <p>Seja bem vindo de volta</p>
                        <p>Que tal adotar um novo pet?</p>
                        <Link to="/">Adotar Pet <FaPaw size="14px"/></Link>
                    </div>
                    <div className="perfil_right">
                        <img src={Um} alt="desenho"/> 
                    </div>
                    
                </div>
                <div className="cards_perfil">
                    <div className="cards">
                        <strong>Pets</strong>
                        <div className="number">
                            <span>36</span>
                            <img src={Animal} alt="Animais"/>
                        </div>
                    </div>
                    <div className="cards">
                        <strong>ONGs</strong>
                        <div className="number">
                            <span>10</span>
                            <img src={Ongs} alt="Ongs"/>
                            
                        </div>
                    </div>
                    <div className="cards">
                        <strong>Adotando</strong>
                        <div className="number">
                            <span>20</span>
                            <img src={Pessoas} alt="Pessoas"/>
                            
                        </div>
                    </div>
                </div>

                <div className="animais">
                    <Animais/>
                </div>
            </section>
            <Footer/>
        </Container>
    )
}