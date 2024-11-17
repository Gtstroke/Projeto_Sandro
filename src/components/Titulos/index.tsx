import './Titulos.css';

function Titulos() {
  const titulos = [
    { id: 1, nome: 'Campeonato Brasileiro', quantidade: 7 },
    { id: 2, nome: 'Copa do Brasil', quantidade: 4 },
    { id: 3, nome: 'Libertadores da América', quantidade: 3 },
    { id: 4, nome: 'Mundial de Clubes', quantidade: 1 },
  ];

  return (
    <section id="titulos" className="titulos">
      <h2>Títulos Importantes</h2>
      <ul className="lista-titulos">
        {titulos.map((titulo) => (
          <li key={titulo.id} className="titulo">
            <h3>{titulo.nome}</h3>
            <p>{titulo.quantidade}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Titulos;