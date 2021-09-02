import React from 'react'
import './Ranking.css'

export default function Ranking () {

   return(
      <>
        {/* <!-- Page content --> */}
        <div className="content c2">

            <div className="tabela">
                <h2>Ranking</h2>
                <p>Rank dos profissionais mais bem avaliados da plataforma.</p>
                
                <table style="width: 70%;">
                <tr>
                    <th>Nome</th>
                    <th>Profissão</th> 
                    <th>Posição</th>
                    <th>%</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>1</td>
                    <td>87</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>2</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>3</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>4</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>5</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>6</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>7</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>8</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>9</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>10</td>
                    <td>50</td>
                </tr>
                
                </table>    
            </div>
                
        </div>    
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      </>
)}