import React,{useState}from 'react'
import Firebase from '../../firebase'
import { Link, useHistory } from 'react-router-dom'

import { FaChevronLeft } from 'react-icons/fa'
import { Container } from './styled'

import Logo from '../../logo.svg'
import Ilustration from '../../cat.png'

export default function LoginScreen(){
    const [filds,setFilds] = useState({})
    const [msg,setMsg] = useState({})

    const history = useHistory()
    
    const register = (name,email,senha,confirmPassword)=>{
        if(senha === confirmPassword){
            Firebase.register(name,email,senha)
            .then(res=> {
                setMsg({status:true,message:"Usuario cadastrado com sucesso!"})
                setTimeout(()=>{
                    history.push("/")
                },1400)
            })
            .catch(error=>{
                setMsg({status:false,message:error.message})
            })

        }else{
            setMsg({status:false,message:"Confirmação de senha incorreta, tente novamente.vamo ver até onde vai"})
        }
        
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
                            <input type="text" placeholder="name" value={filds.name} onChange={(e)=> setFilds({...filds,name:e.target.value})} />
                            <input type="email" placeholder="email" value={filds.email} onChange={(e)=> setFilds({...filds,email:e.target.value})} />
                            <input type="password" placeholder="password" value={filds.password} onChange={(e)=> setFilds({...filds,password:e.target.value})} />
                            <input type="password" placeholder="confrim password" value={filds.passwordConfirm} onChange={(e)=> setFilds({...filds,passwordConfirm:e.target.value})} />
                            <button onClick={()=> register(filds.name,filds.email,filds.password,filds.passwordConfirm)}>Entrar</button>  
                        </div>
                          
                        <div className="footer">
                                                       
                             <Link to="/login"> Logar-se</Link>
                        </div>
                    </div>
                <strong className="msg">{msg.message}</strong>

                </div>
                <div className="image">
                    <strong>De um lar a um amiguinho.</strong>
                    <img src={Ilustration} alt="vetor"/>
                    <a href="http://www.freepik.com">Designed by Freepik</a>
                </div>
            </div>
        </Container>
    )
}