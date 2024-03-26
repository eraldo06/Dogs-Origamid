import React from "react"
import styles from  './Header.module.css'
import { Link } from "react-router-dom"
import foto from "../Assets/dogs.svg"


export const Header=()=>{
return(
    <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
           <Link to='/' > 
           <img src={foto} alt="" className={styles.logo} />
           </Link>

            <Link to='/Login' className={styles.login}>Login /Criar</Link>
        </nav>
    </header>
)
}