import React from "react";
import { Link } from "react-router-dom";
import styles from "../landing/lading.module.css"

export default function Landing(){

    return (
        <div className={styles.containergen}>
            
            <div className={styles.smallContainer}>
            <img src={gif} className={styles.gif}/>
            <h1 className={styles.titulo}>Bienvenido a terraria!</h1>
            <Link to={"/home"} className={styles.boton}></Link>
            </div>

            
        </div>
        
    )
}