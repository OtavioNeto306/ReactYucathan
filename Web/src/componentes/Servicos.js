import React from 'react'
import Contabil from '../componentes/img/Contabilidade_sobre.png'
import Escrita from '../componentes/img/Escrita_sobre.png'
import Folha from '../componentes/img/Folha_sobre.png'
import Adm from '../componentes/img/Administrar_sobre.png'
import Honorarios from '../componentes/img/Honorarios.ico'



const Servicos = props => {
    return (
        
<div id='services' className='container-fluid text-center'>
  <h2>SOLUÇÕES</h2>
  <h4>O que nós oferecemos</h4>
  <br />
  <div className='row '>
    <div className='col-sm-4'>
    <span className= 'LogoEscrita'  ><img src={Escrita} height="40" alt="escrita" /> </span> 
      <h4>REGULARIZAÇÃO FISCAL</h4>
      <p>O setor de regularização fiscal é responsável por realizar o seu planejamento tributário, afim de manter sua empresa quite com suas obrigações legais e fiscais..</p>
    </div>
    <div className='col-sm-4'>
    <span className= 'LogoContabil'  ><img src={Contabil} height="40" alt="contabil" /> </span> 
      <h4>CONTABIL</h4>
      <p>A proposta do nosso setor contábil é promover a gestão e manutenção de documentação necessária, assim como a geração de relatórios, para que nossos clientes estejam sempre em dia com sua contabilidade.</p>
    </div>
    <div className='col-sm-4'>
    <span className= 'LogoFolha'  ><img src={Folha} height="40" alt="folha" /> </span> 
      <h4>RECURSOS HUMANOS</h4>
      <p>Responsável pelo setor de contratação e rescisão de funcionários, folha de pagamento e obrigações trabalhistas da sua empresa.</p>
    </div>
  </div>
  <br /><br />
  <div className='row '>
    <div className='col-sm-4'>
    <span className= 'LogoContabil'  ><img src={Adm} height="40" alt="contabil" /> </span> 
      <h4>PROCURADORIA</h4>
      <p>A Yucathan Tavares conta com uma equipe de profissionais que auxiliará em todos os quesitos e processos para você abrir ou fechar sua empresa com tranquilidade e muita eficiência.</p>
    </div>
    <div className='col-sm-4'>
    <span className= 'LogoContabil'  ><img src={Honorarios} height="40" alt="contabil" /> </span> 
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-wrench logo-small'></span>
      <h4>color:#303030;'>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>


    )
}

export default Servicos