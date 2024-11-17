import React from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Sobre from './components/Sobre/Sobre';
import GaleriaDeFotos from './components/GaleriaDeFotos/GaleriaDeFotos';
import Elenco from './components/Elenco/Elenco';
import Titulos from './components/Titulos/Titulos';
import Rodape from './components/Rodape/Rodape';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <main>
        <Sobre />
        <GaleriaDeFotos />
        <Elenco />
        <Titulos />
      </main>
      <Rodape />
    </div>
  );
}

export default App;