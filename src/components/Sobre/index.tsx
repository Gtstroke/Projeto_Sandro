import './Sobre.css';
import antigo from "../../assets/Flamengo-antigo.png"

export default function Sobre() {
  return (
    <section id="historico" className="sobre">
      <h2>História do Clube de Regatas do Flamengo</h2>
      <div className="sobre-content">
        <div className="sobre-text">
          <p>
            O Clube de Regatas do Flamengo foi fundado em 15 de novembro de 1895 como um clube de remo na cidade do Rio de Janeiro. Inicialmente, o clube não tinha um time de futebol, que só foi criado em 1912. Desde então, o Flamengo se tornou um dos clubes mais populares e bem-sucedidos do Brasil.
          </p>
          <p>
            Ao longo de sua história, o Flamengo conquistou inúmeros títulos importantes, incluindo Campeonatos Brasileiros, Copas do Brasil, Libertadores da América e um Mundial de Clubes. O clube é conhecido por sua torcida apaixonada, chamada de "Nação Rubro-Negra".
          </p>
          <p>
            Campeão Carioca em 1914 e bicampeão pela primeira vez logo no ano seguinte. A caminhada rumo ao título invicto começou com uma goleada de 5 a 0 sobre o Fluminense nas Laranjeiras e foi concluída com outro placar elástico: 5 a 1 diante do Bangu, na tarde de 31 de outubro de 1915, naquele que foi o primeiro jogo do Campo da Rua Paysandu, nova casa rubro-negra inaugurada provisoriamente para a ocasião.
          </p>
          <p>
            Porém, a comemoração teve que esperar o resultado do jogo entre América-RJ e Fluminense, anulado no primeiro turno. A vitória americana por 5 a 3 garantiu a taça para o Flamengo.
          </p>
        </div>
        <div className="sobre-image">
          <img src={antigo} alt="Time do Flamengo em 1914" />
          <p className="image-caption">Time do Flamengo - Campeão Carioca de 1914</p>
        </div>
      </div>
    </section>
  );
}