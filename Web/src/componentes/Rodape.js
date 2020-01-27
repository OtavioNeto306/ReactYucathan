import React from 'react'
import Mapa from './mapa.png'


const Rodape = props =>{

    return(

      <div>

        
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



    <form id="gform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com"
          action="https://script.google.com/macros/s/AKfycbw0oI_x2Tch_q3dxpkQdKnG0E_YJIgIwyzwXYoPJw/exec">


    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required/>
        </div>

        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' name='email' placeholder='Email'  type='email'  required placeholder='email@examplo.com'/>
          
        </div>
      </div>
      <textarea className='form-control' id='Menssagem' name='Menssagem' placeholder='Menssagem para Contato' rows='5'></textarea><br />
      <div className='row'>
        
      
        
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right'  type='submit'>Enviar</button>
        
        </div>

      </div>
    </div>
    </form>
  

    
    <script data-cfasync="false" type="text/javascript"
            src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>

  </div>
</div>

      
        <footer className='container-fluid text-center'>
  <a href='#top' title='To Top'>
    <span className='glyphicon glyphicon-chevron-up'></span>

    
  </a>
  <p> YUCATHAN TAVARES CONTABILIDADE <a href='https://www.yucathantavares.com.br' title='Visit '>https://www.yucathantavares.com.br</a></p>
</footer>
</div>
    )

}

export default Rodape