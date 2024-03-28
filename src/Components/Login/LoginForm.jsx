import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginForm = ()=>{

    const [userName, setUserName]= useState('')
    const [password, setPassword]= useState('')

    const handleSub = (event)=>{
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName, password}),
        })
        .then((res)=>{
            console.log(res);
            return res.json()
        })
        .then((json)=>{
            console.log(json);
        })
    }

    return(
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSub}>
                <input type="text"
                        value={userName} 
                        onChange={({target})=> setUserName(target.value)}/>
                <input type="text"
                        value={password} 
                        onChange={({target})=> setPassword(target.value)}/>
            
            <button>Entrar</button>
                
            </form>
            <Link to='/login/criar'>Cadastrar</Link>
        </section>
    )
}