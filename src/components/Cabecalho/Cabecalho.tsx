import {  Facebook,  Instagram, Youtube } from 'lucide-react';
import logo from "../../assets/flamengo-15.png";
import './Cabecalho.css';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="top-bar">
        <div className="logo-buttons">
          <img src={logo} alt="Flamengo Logo" className="logo" />
          <a href="https://www.mengo.com.br/" className="cta-button" target="_blank" rel="noopener noreferrer">
            SEJA SÓCIO-TORCEDOR
          </a>
          <a href="https://cloud.news.flamengo.com.br/flatvmais/" className="cta-button" target="_blank" rel="noopener noreferrer">
            ACESSE A FLATV+
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/groups/5404148843/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/flamengo/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://www.youtube.com/@flamengo" target="_blank" rel="noopener noreferrer">
            <Youtube size={20} />
          </a>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#HISTORICO">HISTÓRICO DO CLUBE</a></li>
          <li><a href="#galeria">GALERIA DE FOTOS</a></li>
          <li><a href="#elenco">ELENCO PRINCIPAL</a></li>
          <li><a href="#titulos">TITULOS IMPORTANTES</a></li>
          <li><a href="https://loja.flamengo.com.br/" target="_blank" rel="noopener noreferrer">LOJA</a></li>
        </ul>
      </nav>
    </header>
  );
}
