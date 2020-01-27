import React from 'react'
import Logo from './logo.svg'
import Logocentro from './logocentro.svg'
import FundoImg from './img/fundo.jpg'


import {Link} from 'react-router-dom'





const Cabecalho = props => {
  return (




    <div>


<div className='bgimg-1 w3-display-container w3-opacity-min' id='home'>
      <div className='w3-display-middle' >
        
      <span className='logoFundo' className="w3-center w3-padding-large  w3-xlarge w3-wide w3-animate-opacity"><img src={Logocentro} height="180" alt="Logoempresa" /></span>
      </div>
      <br/>
     
      <h2 className="ls-l"  data-ls="delayin:0;offsetxin:1000;offsetxout:1000;" >
                Nós contabilizamos<br/>a vida financeira<br/>do seu negócio!
            </h2>
    </div>
    <div className="panel panel-primary"></div>   

    




     

      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>

          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            <Link  className='navbar-brand' to='/'>
            <img src={Logo} height="40" alt="Logoempresa" />
            
            </Link>

          </div>

          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/'>INICIO</Link></li>
              <li><Link to='Servicos'>SERVIÇOS </Link> </li>
              <li><Link to='Portifolio'>CLIENTES</Link></li>
              <li><Link to='Eventos'>EVENTOS</Link></li>
              <li><Link to='Contato'>CONTATO</Link></li>
              
            </ul>
          </div>
        </div>

      </nav>
    </div>
    
  )
}

export default Cabecalho