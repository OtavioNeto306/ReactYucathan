import React from 'react'
import {Link} from 'react-router-dom'



const Cabecalho = props => {
  return (



    <div>]

<div className='jumbotron text-center'>
        <h1>Yucathan Tavares</h1>
        <p>Contabilidade</p>
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-danger'>Subscribe</button>
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


            <Link className='navbar-brand' to='/'>logo</Link>

          </div>

          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/'>INICIO</Link></li>
              <li><Link to='Servicos'>SERVIÇOS </Link> </li>
              <li><a href='#portfolio'>PORTFOLIO</a></li>
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