
import './Elenco.css';

export default function Elenco() {
  const elenco = {
    Goleiros: ['Matheus Cunha', 'Agustín Rossi'],
    Zagueiros: ['Léo Ortiz', 'Léo Pereira', 'Fabrício Bruno', 'David Luiz', 'Cleiton'],
    'Laterais Direitos': ['Guillermo Varela', 'Wesley'],
    'Laterais Esquerdos': ['Matías Viña', 'Ayrton Lucas', 'Alex Sandro'],
    Volantes: ['Allan', 'Erick Pulgar', 'Everton Araújo'],
    Meias: ['Giorgian de Arrascaeta', 'Gerson', 'Nicolás de la Cruz', 'Carlos Alcaraz', 'Matheus Gonçalves'],
    Atacantes: ['Gabriel Barbosa (Gabigol)', 'Pedro', 'Bruno Henrique', 'Luiz Araújo', 'Michael', 'Everton', 'Gonzalo Plata', 'Carlinhos']
  };

  return (
    <section id="elenco" className="elenco">
      <h2>Elenco Principal</h2>
      <div className="lista-jogadores">
        {Object.entries(elenco).map(([posicao, jogadores]) => (
          <div key={posicao} className="posicao-grupo">
            <h3>{posicao}</h3>
            <ul>
              {jogadores.map((jogador, index) => (
                <li key={index} className="jogador">{jogador}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}