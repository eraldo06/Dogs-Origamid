import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../Form/Input"
import { Button } from "../Form/Button"
import { useForm } from "../../Hooks/useForm"
import { TOKEN_POST } from "../../api"

export const LoginForm = ()=>{

    const username = useForm();
    const password = useForm();
   

    async function handleSub(event){
        event.preventDefault();

        if(username.validate() && password.validate()){

            const {url, options} = TOKEN_POST({username: username.value, password: password.value})

            const res = await fetch(url, options);
            const json = await res.json();
            console.log(json);
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