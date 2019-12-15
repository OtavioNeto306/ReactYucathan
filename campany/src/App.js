import React, { Component } from 'react';


import Site from './site'
import Rodape from './componentes/rodape'
import Cabecalho from './componentes/cabecalho'
import Contato from './componentes/contato'
function App() {
  return (
    <div className="App">
   <Cabecalho/>
    <Site/>
    <Contato/>
    <Rodape/>
    

    </div>
  );
}

export default App;
