import React from 'react'
import { Component } from 'react'
import config from './../firebase-config'

class Portifolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: {

      }
    }
    config.syncState('portfolio',{
            context: this,
            state: 'portfolio',
            asArray: false
    })
  }
  render() {
    return (
      <div>

        {/* Container (Portfolio Section) */}
        <div id='portfolio' className='container-fluid text-center bg-grey'>
          <h2>CLIENTES</h2><br />
          <h4>What we have created</h4>
          <div className='row text-center '>
            
          {
            <p>{JSON.stringify(Object.keys(this.state.portfolio))}</p>



          }


          </div><br />

          <h2>O QUE DIZEM NOSSOS CLIENTES</h2>
          <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
            {/* Indicators */}
            <ol className='carousel-indicators'>
              <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
              <li data-target='#myCarousel' data-slide-to='1'></li>
              <li data-target='#myCarousel' data-slide-to='2'></li>
            </ol>

            {/* Wrapper for slides */}
            <div className='carousel-inner' role='listbox'>
              <div className='item active'>
                <h4>'Esta empresa é a melhor. Estou muito feliz com o resultado!'<br /><span>Otavio Neto, Técnico de Informatica</span></h4>
              </div>
              <div className='item'>
                <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
              </div>
              <div className='item'>
                <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
              </div>
            </div>

            {/* Left and right controls */}
            <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
              <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
              <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>

      </div>

    )

  }



}



export default Portifolio