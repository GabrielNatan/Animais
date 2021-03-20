import React,{useState}from 'react'
import Firebase from '../../firebase'
import { Link } from 'react-router-dom'

import { FaChevronLeft } from 'react-icons/fa'
import { Container } from './styled'

import Logo from '../../logo.svg'
import Ilustration from '../../Vector.png'

export default function LoginScreen(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [recuperar, setRecuperar] = useState(false)
    const [msg,setMsg] = useState()
    
    const logar = (email,senha)=>{
        Firebase.login(email,senha)
        .then(res=> setMsg("Login realizado com sucesso!"))
        .catch(res=> setMsg(res.message))
    }
    return(
        <Container>
            <div className="cont">
                <div className="login">
                {msg}
                    <div className="cardLogin">
                        <Link to="/" className="back"><FaChevronLeft size={25}/> <span>Voltar</span></Link>
                        <div className="logo">
                            <img src={Logo} alt="logo"/>
                            <strong>Dogneo</strong>
                        </div>
                        <div className="form">
                            { !recuperar ?
                                <>
                                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                    <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                    <button onClick={()=> logar(email,password)}>Entrar</button>
                                </>

                                :

                                <>
                                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                    <button onClick={()=>setRecuperar(true)}>{!recuperar ? "Entrar" : "Enviar"}</button>
                                </>
                            }
                        </div>

                        <div className="footer">
                            {!recuperar ? 
                            <>
                                <span onClick={()=>setRecuperar(true)}>Recuperar senha </span>
                            </>
                            :
                            <>
                                <span onClick={()=>setRecuperar(false)}>Logar-se </span>
                            </>}
                             <Link to="/register"> Registrar-se</Link>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <strong>De um lar a um amiguinho.</strong>
                    <img src={Ilustration} alt="vetor"/>
                <a href='https://www.freepik.com/vectors/people'>People vector created by pikisuperstar - www.freepik.com</a>
                </div>
            </div>
        </Container>
    )
}