import React,{useState}from 'react'
import Firebase from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

import { FaChevronLeft } from 'react-icons/fa'
import { Container } from './styled'

import Logo from '../../logo.svg'
import Ilustration from '../../Vector.png'

export default function LoginScreen(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [recuperar, setRecuperar] = useState(false)
    const [msg,setMsg] = useState({})

    const history = useHistory()
    
    const logar = (email,senha)=>{
        Firebase.login(email,senha)
        .then(res=>{
            setMsg({status:true,message:"Login realizado com sucesso!"})
            setTimeout(()=>{
                history.push('/painel')
            },1000)

        })
        .catch(res=> {
            setMsg({status:false,message:res.message})
            
        })
    }

    const resetMyPassword = (email)=>{
        Firebase.resetPassword(email).then(res=>{
            setRecuperar(false)
        })
    }
    return(
        <Container status={msg.status}>
            <div className="cont">
                <div className="login">
                    <div className="cardLogin">
                        <Link to="/" className="back"><FaChevronLeft size={25}/> <span>Voltar</span></Link>
                        <div className="logo">
                            <img src={Logo} alt="logo"/>
                            <strong>Doguíneo</strong>
                        </div>
                        <div className="form">
                            { !recuperar ?
                                <>
                                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                                    <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                                    <button onClick={()=> logar(email,password)}>Entrar</button>
                                </>

                                :

                                <>
                                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                                    <button onClick={()=>{resetMyPassword(email)}}>{!recuperar ? "Entrar" : "Enviar"}</button>
                                </>
                            }
                        </div>
                            <label>
                                <input type="checkbox"/> Manter-se conectado.
                            </label>
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
                <strong className="msg">{msg.message}</strong>

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