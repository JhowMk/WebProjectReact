import React from 'react'
import './Login.css'

export default function Login () {

   return(
      <>
        <div className="container" >

        
        <div className="content">      
        {/* <!--FORMULÁRIO DE LOGIN--> */}
        <div id="login">
            <form method="post" action=""> 
            <h1 className="th1">Login</h1> 
            <p> 
                <label for="email_login">Seu e-mail</label>
                <input className="entrada" id="email_login" name="email_login" required="required" type="text" placeholder="Digite seu e-mail"/>
            </p>
            
            <p> 
                <label for="senha_login">Sua senha</label>
                <input className="entrada" id="senha_login" name="senha_login" required="required" type="password" placeholder="Digite sua senha" /> 
            </p>
            
            <p> 
                <input className="entrada" type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
                <label for="manterlogado">Manter-me logado</label>
            </p>
            
            <p> 
                <input className="entrada" type="submit" value="Entrar" /> 
            </p>
            
            <p>
                <a className="btn btn-outline-primary button_slide" data-toggle="modal" data-target="#exampleModal" href='##'>Cadastre-se</a>
            </p>


            </form>
        </div>
        </div>
        </div> 

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div style="text-align: center;" className="modal-header">
            <h3>Cadastro</h3> 
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
            <div id="cadastro">
                <form method="post" action=""> 
                <p> 
                    <label for="nome_cad">Nome</label>
                    <input className="entrada" id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Nome" />
                </p>

                <p> 
                    <label for="sobrenome_cad" id="sobrenome_txt">Sobrenome</label>
                    <input className="entrada" id="sobrenome_cad" name="sobrenome_cad" required="required" type="text" placeholder="Sobrenome" />
                </p>
                
                <p> 
                    <label for="email_cad">E-mail</label>
                    <input className="entrada" id="email_cad" name="email_cad" required="required" type="text" placeholder="email@email.com"/> 
                </p>
                
                <p> 
                    <label for="telefone_cad">Telefone</label>
                    <input className="entrada" id="telefone_cad" name="telefone_cad" required="required" type="text" placeholder="(xx) 99999-9999"/> 
                </p>

                <p> 
                    <label for="nascimento_cad">Data de Nascimento</label>
                    <input className="entrada" id="nascimento_cad" name="nascimento_cad" required="required" type="date" placeholder="(xx) 99999-9999"/> 
                </p>

                <p> 
                    <label for="genero_cad">Gênero</label>
                    <select id="genero" name="select">
                    <option value="sel"> Selecione o Gênero</option>
                    <option value="fem">Feminino</option>
                    <option value="masc">Masculino</option>
                    <option value="outros">Outros</option>
                    </select>
                </p>

                {/* <!-- BUTTON QUE MOSTRA OU ESCONDE O CADASTRO DE PROFISSIONAL --> */}
                <div>
                    <p>Você é um usuário profissional?</p>
                    <input type="radio" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" name="profissional" checked />
                    <label for="nao_profissional">Não</label><br/>
                    <input type="radio" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" name="profissional"/>
                    <label className="select_profissional" for="sim_profissional">Sim</label><br/>
                </div>
                <div className="row">
                    <div className="col">
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <div className="cadastro">
                    <p> 
                    <label for="telefone_cad">Especialidade: </label>
                    <input className="entrada" id="especialidade" name="especialidade" required="required" type="text" placeholder="Digite sua especialização"/> 
                    </p>
                    <p> 
                    <label for="telefone_cad">Tipo do documento: </label>
                    <input className="entrada" id="tipo_doc" name="tipo_doc" required="required" type="text" placeholder="Digite qual é o documento"/> 
                    </p>
                    <p> 
                    <label for="telefone_cad">Número do documento: </label>
                    <input className="entrada" id="n_doc" name="n_doc" required="required" type="text" placeholder="Digite aqui o número do documento"/> 
                    </p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
                <p> 
                    <label for="senha_cad">Senha</label>
                    <input className="entrada" id="senha_cad" name="senha_cad" required="required" type="password" placeholder="*****"/>
                </p>

                <p> 
                    <label for="confirma_senha_cad"> Confirmar Senha</label>
                    <input className="entrada"  id="confirma_senha_cad" name="confirma_senha_cad" required="required" type="password" placeholder="*****"/>
                </p>
                
                <p> 
                    <input className="entrada" type="submit" value="Cadastrar" id="cadastrar"/> 
                </p>
                </form>
            </div>
            </div>
        </div>
        </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </>
)}