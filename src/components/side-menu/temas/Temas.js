import React from 'react'
import './Temas.css'

export default function Temas () {

   return(
      <>
        {/* <!-- Page content --> */}
        <div class="content c2">
            
            <div id="borderTema">
                <div class="temasButton">
                    <button type="button" class="HashButton button_slide slide_down">TEMA 1</button>
                    <button type="button" class="HashButton button_slide slide_right">TEMA 2</button>
                    <button type="button" class="HashButton button_slide slide_left">TEMA 3</button>
                    <button type="button" class="HashButton button_slide slide_diagonal">TEMA 4</button>
                </div>
            </div>

            {/* <!--- \\\\\\\Post--> */}
            <div class="card gedf-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="logo" />
                            </div>
                            <div class="ml-2">
                            <div class="h5 m-0">@LeeCross</div>
                                <div class="h7 text-muted">Miracles Lee Cross</div>
                            </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                    <div class="h6 dropdown-header">Configuration</div>
                                    <a class="dropdown-item" href="##" data-toggle="modal" data-target="#EditMessage" data-whatever="@mdo">Edit</a>
                                    <a class="dropdown-item" href="##" data-toggle="modal" data-target="#DeleteMessage">Delete</a>
                                    <a class="dropdown-item" href="##" data-toggle="modal" data-target="#ReportMessage">Report</a>             
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
            {/* <!--Modal Edit--> */}
            <div class="modal fade" id="EditMessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Titulo:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                    
                                {/* <!--TEMAS SELECIONADOS--> */}
                                <div class="temas1"> 
                                    <select id="genero" name="select">
                                        <option value="sel"> Selecione Um Tema</option>
                                        <option value="fem">EO SOU FELIZ</option>
                                        <option value="masc">EU SOU INCRIVEL</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>

                                {/* <!--Escolher Arquivo --> */}
                                <div class="form-group">
                                    <label for="fupload" class="control-label label-bordered">Clique aqui para escolher um arquivo</label>
                                    <div class="nomeArquivo"></div>
                                    <input type="file" id="fupload" name="fupload" class="fupload form-control" />
                                </div>


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send Post</button>
                        </div>
                        </div>
                    </div>
                </div>


        
                    {/* <!-- Modal Delete Message --> */}
                    <div class="modal fade" id="DeleteMessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Deletar message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" placeholder="Eu estou fu" readonly></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                        </div>
                    </div> 
                    
                    {/* <!-- Modal Report Message--> */}
                    <div class="modal fade" id="ReportMessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reportar message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text" placeholder="Motivo Do Report"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Report</button>
                            </div>
                        </div>
                        </div>
                    </div>    

                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="##">
                            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                        <div>
                            <span class="badge badge-primary">EO SOU FELIZ</span>
                            <span class="badge badge-primary">EU SOU INCRIVEL</span>
                            <span class="badge badge-primary">Outros</span>
                        </div>
                    </div>
                    <div class="card-footer">
                             cont = 0
                            function adicionarLike() {
                                
                                if(cont == 0) {
                                    cont += 1}
                                    else{
                                        cont -= 1
                                }
                                botao.innerHTML = `${c} likes`;
                            }

                        
                        <button id="botao" onclick="adicionarLike()">0 Likes </button>
                        <a href="../post/comment.html" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="##" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
        </div>


        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      </>
)}