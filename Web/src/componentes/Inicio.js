import React from 'react'
import { Link } from 'react-router-dom'


const Inicio = props => {
    return (
        
        <div>
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>EMPRESA </h2> <br />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br /> <Link to='/contato' className='btn btn-default btn-lg'>Entrar em Contato </Link>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-signal logo'></span>
                    </div>
                </div>
            </div>


            <div className='container-fluid bg-grey'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo '></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>NOSSOS VALORES</h2><br />
                        <h4><strong>MISSÃO:</strong> Prestar serviços de contabilidade em sintonia com a real necessidade de nossos clientes com o objetivo de ser referência em nossa área.</h4><br />
                        <p><strong>VISÃO:</strong> Nossa visão Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    </div>

                </div>
            </div>

        </div>
        



    )
    
}

export default Inicio