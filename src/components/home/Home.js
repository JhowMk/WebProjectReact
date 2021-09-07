import React, {useState}from 'react'
import {} from 'react-bootstrap'
import './Home.css'
import logo from '../img/Logo1.png'
import like from '../img/Like.png'
import comment from '../img/comment.png'
import share from '../img/share.png'
import attachment from '../img/anexo.png'

export default function Home() {

    const [qtdLike, setQtdLike] = useState(13);

    const adicionarLike = () => {
        if (qtdLike === 13){
            setQtdLike(qtdLike+1);
        }
        else{
            setQtdLike(qtdLike-1);
        }
    }
    
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


        <div className="NewPost">
            <div id="NewP1">
                <div className="posit posit1">
                    
                    <h3 className="textP">Nova Publicação</h3>
                </div>
                <hr id="hrUser"></hr>
            </div>

            <div>
                <div className="alinha">

                    <div>
                        <h2 className="titulo">Titulo</h2>
                        <div><textarea className="form-control" id="message-text"></textarea></div>
                    </div>

                    <div>
                        <h2 className="titulo">Publicação:</h2>
                        <div><textarea className="form-control" id="message" rows="5" placeholder="O que você quer compartilhar hoje?"></textarea></div>
                    </div>
                    
                    {/* <!--TEMAS SELECIONADOS--> */}
                            <div className="temas"> 
                                <select id="genero" name="select">
                                    <option value="sel">Selecione um tema</option>
                                    <option value="ans">Ansiedade</option>
                                    <option value="sup">Superação</option>
                                    <option value="conq">Conquistas</option>
                                    <option value="rel">Relatos</option>
                                    <option value="dicas">Dicas</option>
                                  </select>
                            </div>
                                                    
                            <div className="form-group">
                                <label for="fupload" className="control-label label-bordered"> Enviar Arquivos</label>
                                
                                <input type="file" id="fupload" name="fupload" className="fupload form-control" />
                            </div>
                            <div className="btn-toolbar justify-content-between">
                    
                        <div className="privacidade"> 
                            <select id="privac" name="opcao">
                                <option value="ans">Público</option>
                                <option value="sup">Amigos</option>
                                <option value="conq">Apenas Eu</option>
                                </select>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="buttonL" id="enviar">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr id="divisao"></hr>
        <div className="post">
            <div id="post1">
                <div className="posic post1">
                    <img className="circlePerfil" src="https://i.picsum.photos/id/890/50/50.jpg?hmac=WoIS0wOCaG-A7OL-94AQUibTMCPw1faVXwktGYCgLO4" alt=""></img>
                    <p id="nick">@michelemelo</p>
                    <p id="nickDesc">32 anos, São Paulo</p>
                </div>
                <hr id="hrUser"></hr>
            </div>

            <div>
                <div className="alinha">
                    <p id="timePost">10 min ago</p>
                    <h1 className="titulo">Fato que aprendi sobre a ansiedade</h1>
                    <p className="conteudoPost">Aprendi por experiência própria que você não deixa de ser ansioso de uma hora para a outra, mas você consegue lidar com mais tranquilidade com as coisas, focar mais, e lidar com mais naturalidade com as coisas que acontecem. Pensando nisso, tenho lidado e superado a ansiedade um pouco a cada dia.</p>
                    
                    {/*Temas Escolhidos*/}
                    <div id="TemaP">
                        <span class="badge badge-primary">Superação</span>
                        <span class="badge badge-primary">Ansiedade</span>
                        <span class="badge badge-primary">Relatos</span>
                    </div>
                </div>

                {/*Interações - like*/}
                <div className="botoes">
                    <button class="buttonL" onClick={() => { adicionarLike() }}>
                    <img src={like} alt="likes"/>
                     {qtdLike}</button>
                    <button class="buttonL"><img src={comment} alt="comment" id="comment"/></button>
                    <button class="buttonL"><img src={share} alt="share"/></button>
                </div>
            </div>
        </div>
    </>
)}