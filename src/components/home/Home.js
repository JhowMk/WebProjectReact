import React from 'react'
import {} from 'react-bootstrap'
import './Home.css'
import logo from '../img/Logo.png'

export default function Home() {

   return(
       <>
        <div className="topnav">          
            <a className="navbar-brand active" href="./index.html">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                Bootstrap
            </a>
            <div className="textnav">
                <a href="src\components\post\Comment.js">Perfil</a>
                <a href="./navbar/sobre.html">Sobre</a>
                <a href="./navbar/ajuda.html">Ajuda</a>
                <a href="#about">Logout</a>
            </div>
        </div>
        
        <div className="sidebar c1">
            <a href="./menu-lateral/temas.html">Temas</a>
            <a href="./menu-lateral/ranking.html">Ranking</a>
            <a href="./menu-lateral/chat.html">Chat</a>
            <a href="./menu-lateral/configs.html">Configurações</a>
            
        </div>
    </>
)}