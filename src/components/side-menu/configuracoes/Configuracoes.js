import React from 'react'
import './Configuracoes.css'

export default function Configuracoes () {

   return(
      <>
      {/* <!-- Page content --> */}
        <div className="box content">

            <div className="content-child-1">
                <div className="buttons">
                    <button>Editar Perfil</button>
                    <button>Segurança</button>
                    <button>Notificações</button>
                    <button>Privacidade</button>
                </div>
            </div>

            <div className="content-child-2">
                <div className="input_dados"> 
                    <label className="label_input" for="nome_edit">Nome</label>
                    <input className="entrada" id="nome_edit" name="nome_edit" required="required" type="text" placeholder="Nome" />
                </div>

                <div className="input_dados"> 
                    <label className="label_input" for="sobrenome_edit" id="sobrenome_txt">Sobrenome</label>
                    <input className="entrada" id="sobrenome_edit" name="sobrenome_edit" required="required" type="text" placeholder="Sobrenome" />
                </div>
                
                <div className="input_dados"> 
                    <label className="label_input" for="email_edit">E-mail</label>
                    <input className="entrada" id="email_edit" name="email_edit" required="required" type="text" placeholder="email@email.com"/> 
                </div>
                
                <div className="input_dados"> 
                    <label className="label_input" for="telefone_edit">Telefone</label>
                    <input className="entrada" id="telefone_edit" name="telefone_edit" required="required" type="text" placeholder="(xx) 99999-9999"/> 
                </div>

                <div className="input_dados"> 
                    <label className="label_input" for="foto_edit">Foto</label>
                    <label for="fupload" className="control-label label-bordered">Clique aqui para escolher um arquivo</label>
                    <div className="nomeArquivo"></div>
                    <input type="file" id="fupload" name="fupload" className="fupload form-control" />            
                </div>

                <div className="input_dados">  
                    <label className="label_input" for="biografia">Biografia</label>
                    <textarea className="biografia" name="biografia" id="biografia"></textarea>
                </div>

                <div className="input_dados"> 
                    <label className="label_input" for="documento_edit">Número do Documento</label>
                    <input className="entrada" id="documento_edit" name="documento_edit" required="required" type="text" placeholder="00/000000"/> 
                </div>

                <div className="confirmar">
                    <button>Confirmar</button>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </>
)}