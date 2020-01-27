import React from 'react'
import Contabil from '../componentes/img/Contabilidade_sobre.png'
import Escrita from '../componentes/img/Escrita_sobre.png'
import Folha from '../componentes/img/Folha_sobre.png'
import Adm from '../componentes/img/Administrar_sobre.png'
import Honorarios from '../componentes/img/Honorarios.ico'



const Servicos = props => {
  return (

    <div>
    
    <div id='services' className='container-fluid text-center'>
      <h2>Serviços Contábeis</h2>
      <br />
      <div className='row '>
        <div className='col-sm-4'>

          <span className='glyphicon glyphicon-ok' > </span>

          <h4>Abertura de Empresas</h4>
          <p>Realizamos todo o processo de abertura ou encerramento de empresas de modo rápido e sem burocracias para você...</p>
        </div>
        <div className='col-sm-4'>
          <span className='glyphicon glyphicon-ok' > </span>
          <h4>Contabilidade Completa</h4>
          <p>Realizamos todos os serviços pertinentes da área contábil, garantindo todas as obrigações perante o governo..</p>
        </div>
        <div className='col-sm-4'>
        <span className='glyphicon glyphicon-ok' > </span>
          <h4>Serviços Fiscais</h4>
          <p>Dispomos de uma equipe pronta para lhe atender em todas as questões fiscais da sua empresa, garantindo assertividade e organização..</p>
        </div>
      </div>
      <br /><br />
      <div className='row '>
        <div className='col-sm-4'>
        <span className='glyphicon glyphicon-ok' > </span>
          <h4>Imposto de Renda</h4>
          <p>Realizamos todo o processo de declaração de imposto de renda da sua empresa e também de pessoas físicas.</p>
        </div>
        <div className='col-sm-4'>
        <span className='glyphicon glyphicon-ok' > </span>
          <h4>Assessoria Empresarial</h4>
          <p>Dispomos de profissionais prontos e preparados para assessorar você e sua empresa em todos os meios empresariais.</p>
        </div>
        <div className='col-sm-4'>
        <span className='glyphicon glyphicon-ok' > </span>
          <h4>Conheça mais serviços</h4>
          <p>Precisa de outros serviços não encontrados aqui? Entre em contato conosco que com certeza poderemos te ajudar..</p>
        <div>
          
        </div>
        </div>
      </div>
    </div>

    <div className="panel panel-primary"></div>   

<div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src='#' alt="..."/>
      <div className="caption">
        <h3>Abra sua empresa agora!</h3>
        <p>...</p>
        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Servicos