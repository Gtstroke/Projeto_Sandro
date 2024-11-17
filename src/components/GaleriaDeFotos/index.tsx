
import './GaleriaDeFotos.css';
import flamengo from "../../assets/baixados.jpg"
import flamengo2 from "../../assets/gabigol-flamengo-gol-fluminense-copa-do-brasil-maracana.webp"
import flamengo3 from "../../assets/image.png"
import flamengo4 from "../../assets/images.jpg"
import flamengo5 from "../../assets/mundial-81-flamengo.webp"

import flamengo7 from "../../assets/Flamengo 09132024.jpg"
import flamengo8 from "../../assets/bandeira-flamengo.webp"
import flamengo9 from "../../assets/timecomemora.jpg"


function Galeria() {

  return (
    <section id="galeria" className="galeria">
      <h2>Galeria de Fotos</h2>
      <div className="fotos-container">
          <img src={flamengo} alt="alt" className="foto" />
          <img src={flamengo2} alt="alt" className="foto" />
          <img src={flamengo3} alt="alt" className="foto" />
          <img src={flamengo4} alt="alt" className="foto" />
          <img src={flamengo5} alt="alt" className="foto" />
          <img src={flamengo7} alt="alt" className="foto" />
          <img src={flamengo8} alt="alt" className="foto" />
          <img src={flamengo9} alt="alt" className="foto" />

      </div>
    </section>
  );
}

export default Galeria;