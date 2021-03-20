import React,{useState}from 'react'
import Firebase from '../../firebase'
export default function LoginScreen(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [msg,setMsg] = useState()
    
    const logar = (email,senha)=>{
        Firebase.login(email,senha)
        .then(res=> console.log(res.data))
    }
    return(
        <>
        <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={()=> logar(email,password)}>Entrar</button>
        </>
    )
}