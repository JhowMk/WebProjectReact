import React from 'react'
import {} from 'react-bootstrap'
import './Home.css'
import logo from '../img/Logo1.png'

export default function Home() {

   return(
       <>
       {/* Navbar */}
        <div className="topnav">          
            <a className="navbar-brand active" href="./index.html">
                <img src={logo} width="30" height="30" className="logo" alt=""/>
                 <p className = "mh">Mental Health</p>
            </a>
            <div className="textnav">
                <a href="src\components\post\Comment.js">Perfil</a>
                <a href="./navbar/sobre.html">Sobre</a>
                <a href="./navbar/ajuda.html">Ajuda</a>
                <a href="#about">Logout</a>
            </div>
        </div>
        {/* Menu Lateral */}
        <div className="sidebar c1">
            <a href="./menu-lateral/temas.html">Temas</a>
            <a href="./menu-lateral/ranking.html">Ranking</a>
            <a href="./menu-lateral/chat.html">Chat</a>
            <a href="./menu-lateral/configs.html">Configurações</a>
        </div>

        <div className="post">
            <div id="post1">
                <div className="posic post1">
                    <img className="circlePerfil" src="https://i.picsum.photos/id/890/50/50.jpg?hmac=WoIS0wOCaG-A7OL-94AQUibTMCPw1faVXwktGYCgLO4" alt=""></img>
                    <p id="nick">@Oincrivelm</p>
                </div>
                <hr id="hrUser"></hr>
            </div>

            <div>
                <p id="timePost">10 min ago</p>
            </div>
        </div>


    </>
)}