import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Site from './site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Contato from './componentes/contato'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos';
import Portifolio from './componentes/Portifolio';
import Eventos from './componentes/eventos';
import Admin from './admin/admmin';


function App() {
  return (
    

    <BrowserRouter>
    <div className="App">
     
   <Cabecalho/>

   <Route path='/' exact component={Inicio} />
   <Route path='/servicos'component={Servicos} />
   <Route path='/portifolio' component={Portifolio} />
    <Route path='/contato' component={Contato}/>
    <Route path='/eventos' component={Eventos} />

  
    <Route path='/admin' component={Admin} />
    
    <Rodape/>
    

    </div>
    </BrowserRouter>
  );
}

export default App;
