import React from 'react'
import {} from 'react-bootstrap'
import './Perfil.css'

export default function Perfil () {

   return(
      <>
        <div className="content c2">
            
            <div className="perfil1">
            <div>
                {/* <!-- Profile widget --> */}
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail"></img>
                                <a href="##" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
                            </div>
                            
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Mark Williams</h4>
                                <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>Psicólogo</p>
                            </div>
                            <div className="px-2 alt">
                                <a className="btn btn-outline-primary btn-sm btn-block" href='##'>Seguir</a>
                            </div>
                            <div className="alt">
                                <a className="btn btn-outline-primary btn-sm btn-block" href='##'>Enviar Mensagem</a>
                            </div>
                        
        
                        </div>
                    </div>
                    
                    <div className="bg-light d-flex justify-content-end text-center borderAlt">                
                        
                        <ul className="list-inline mb-0">
        
                        
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                            </li>
                        </ul>
                    </div> 
                    <div className="px-4 py-3">
                        <h5 className="mb-0">Biografia</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">Web Developer</p>
                            <p className="font-italic mb-0">Lives in New York</p>
                            <p className="font-italic mb-0">Photographer</p>
                        </div>
                    </div>
        
        
                    
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
                        <a className="card-link" href="##">
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>
        
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                        <div>
                            <span className="badge badge-primary">EO SOU FELIZ</span>
                            <span className="badge badge-primary">EU SOU INCRIVEL</span>
                            <span className="badge badge-primary">Outros</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        {/* <script>
                            c = 0
                            function adicionarLike() {
                                if(c == 0){
                                c += 1;}else{
                                    c -= 1;
                                }
                                botao.innerHTML = `${c} likes`;
                            } 
                        </script>  */}
                        
                        <button id="botao" onclick="adicionarLike()">0 Likes </button>
                        <a href="./post/comment.html" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                        <a href="##" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
                </div>
            </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>
      </>
)}