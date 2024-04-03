import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Form/Input"
import { Button } from "../Form/Button"
import { useForm } from "../../Hooks/useForm"

export const LoginForm = ()=>{

    const username = useForm();
    const password = useForm();
   

    const handleSub = (event)=>{
        event.preventDefault();

        if(username.validate() && password.validate()){

            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
        .then((res)=>{
            console.log(res);
            return res.json()
        })
        .then((json)=>{
            console.log(json);
        })
        }

        
    }

    return(
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSub}>
                <Input label='Usuário' type='text' name='username' {...username}/>
                <Input label='Senha' type='password' name='password' {...password}/>
            
            <Button>Entrar</Button>
                
            </form>
            <Link to='/login/criar'>Cadastrar</Link>
        </section>
    )
}