import React from 'react'
import './Ajuda.css'

export default function Ajuda () {

   return(
      <>
      <div className="content c2">

        <div className="FAQ">  
            <ul>
                <h5>Perguntas Frequentes</h5>
                <li className="question">Lorem ipsum dolor sit amet consectetur adipisicing elit?</li>
                <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quae dolorum. Eum nihil possimus optio nulla ullam neque, delectus alias placeat vel aliquam, enim impedit saepe itaque explicabo maiores sapiente.</p>
                <li className="question">Lorem ipsum dolor sit amet consectetur, adipisicing elit?</li>
                <p className="answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet tempore nobis non, libero dignissimos, quasi facilis eligendi quam reiciendis excepturi tenetur aut veritatis. Eaque quod assumenda perspiciatis voluptate quas?</p>
                <li className="question">Lorem ipsum dolor sit amet consectetur adipisicing elit?</li>
                <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quae dolorum. Eum nihil possimus optio nulla ullam neque, delectus alias placeat vel aliquam, enim impedit saepe itaque explicabo maiores sapiente.</p>
                <li className="question">Lorem ipsum dolor sit amet consectetur, adipisicing elit?</li>
                <p className="answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet tempore nobis non, libero dignissimos, quasi facilis eligendi quam reiciendis excepturi tenetur aut veritatis. Eaque quod assumenda perspiciatis voluptate quas?</p>
            </ul> 
        </div>

<h5 className="title">Não encontrou sua dúvida? Envie no campo abaixo!</h5>
    
<div className="message">
  <textarea name="mensagem" id="mensagem" placeholder="Digite sua dúvida aqui." required></textarea>
  <input className="enviar" type="button" value="Enviar"></input>
</div>
</div>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</>
)}