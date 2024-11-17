import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Elenco from './components/Elenco';
import Galeria from './components/GaleriaDeFotos';
import Rodape from './components/Rodape';
import Sobre from './components/Sobre';
import Titulos from './components/Titulos';
import EmailForm from './components/Email/Email';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <main>
        <Sobre />
        <Galeria />
        <Elenco />
        <Titulos />
        <EmailForm />
      </main>
      <Rodape />
    </div>
  );
}

export default App;