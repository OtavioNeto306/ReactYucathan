import React from 'react'
import Logo from './logo.svg'
import Logocentro from './logocentro.svg'
import {Link} from 'react-router-dom'





const Cabecalho = props => {
  return (




    <div>

<div className='jumbotron text-center'>
<img src={Logocentro} height="180" alt="Logoempresa" />
        
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Endereço de Email' required />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-danger'>Enviar</button>
            </div>
          </div>
        </form>
      </div>

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
              <li><Link to='Portifolio'>PORTFOLIO</Link></li>
              <li><a href='#pricing'>PRICING</a></li>
              <li><Link to='Contato'>CONTATO</Link></li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
    
  )
}

export default Cabecalho