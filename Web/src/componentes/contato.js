import React from 'react'
import Mapa from './mapa.png'


const contato = props =>{
    return(
<div id='contact' className='container-fluid bg-grey'>
  <h2 className='text-center'>CONTATO</h2>
  <div className='row'>
    <div className='col-sm-5'>
      <p>Entre em contato e retonaremos em breve.</p>
      <p><span className='glyphicon glyphicon-map-marker'></span> Salvador, BA</p>
      <p><span className='glyphicon glyphicon-phone'></span> +55  (71) 3018-0424</p>
      <p><span className='glyphicon glyphicon-envelope'></span> contato@yucathantavares.com.br</p>
      
     <br/>
     <br/>
     <div className="Mapa">
       <p>Endereço: 40301-155 - Caminho das Árvores, Salvador - BA</p>
      <img src={Mapa}  height="350" alt="Logoempresa" />
      </div>
    </div>

    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required/>
        </div>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' name='email' placeholder='Email' type='email' required/>
        </div>
      </div>
      <textarea className='form-control' id='comments' name='comments' placeholder='Comentario' rows='5'></textarea><br />
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default contato