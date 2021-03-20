import React,{useState}from 'react'
import Firebase from '../../firebase'
export default function LoginScreen(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [name,setName] = useState()
    const [msg,setMsg] = useState()
    
    const registrar = (email,senha)=>{
        Firebase.register(name,email,senha)
        .then(res=> console.log(res.data))
    }
    return(
        <>
        <input type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={()=> registrar(name,email,password)}>Entrar</button>
        </>
    )
}