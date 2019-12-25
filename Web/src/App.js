import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Site from './site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Contato from './componentes/contato'
import Inicio from './componentes/Inicio'
import Sevicos from './componentes/Servicos'
import Servicos from './componentes/Servicos';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Cabecalho/>

   <Route path='/' exact component={Inicio} />
   <Route path='/servicos'component={Servicos} />
   
    <Route path='/contato' component={Contato}/>

    <Rodape/>
    

    </div>
    </BrowserRouter>
  );
}

export default App;
