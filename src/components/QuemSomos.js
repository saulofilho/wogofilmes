import React from 'react'
import './QuemSomos.scss'

import Surf from '../../static/assets/quemsomos/16-publi.jpg'
import Festa from '../../static/assets/quemsomos/000-Mariela.jpg'
// import Filme1 from '../../static/assets/quemsomos/grafico.mp4'
import Filme2 from '../../static/assets/quemsomos/18-publi.mp4'

import Matheus from '../../static/assets/matheus.png'
import Richard from '../../static/assets/Richard.png'

const QuemSomos = () => {
  return (
    <div className="quem-wrapper container">
      <div className="quem-row">
        <div className="quem-col">
          {/* <video className="video-hero1" muted autoPlay>
            <source src={Filme1} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video> */}
          <img src={Festa} alt="quem somos nós foto" className="img-festa" />
        </div>
        <div className="quem-col">
          <h2>Quem somos nós</h2>
          <p>
          Na Wogo Filmes, somos apaixonados por contar histórias de forma inovadora e envolvente. 
          Somos mais do que uma produtora audiovisual; acreditamos no poder da transformação através do entretenimento. 
          Nosso foco abrange uma variedade de formatos, desde o cinema até a publicidade, passando pela internet e televisão. 
          Acreditamos que a qualidade é a chave para conquistar o público e gerar um impacto duradouro. 
          A cada projeto, montamos uma equipe de especialistas do mercado, comprometidos em entregar resultados excepcionais.
          </p>
        </div>
      </div>
      <div className="quem-row-video">
        <img src={Surf} alt="quem somos nós foto" className="img-surf" />
        <video className="video-hero2" muted autoPlay loop>
          <source src={Filme2} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="quem-row img-socios">
        <div className="quem-col">
          <img src={Matheus} alt="Matheus" />
        </div>
        <div className="quem-col">
          <h2>Matheus Souza</h2>
          <h4>
            Diretor, Roteirista e Produtor Audiovisual
          </h4>
          <p>
            Atuo há mais de 10 anos no mercado audiovisual e tenho claro o meu
            gosto por contar histórias, por cuidar dos detalhes, e por garantir a
            qualidade técnica de cada material. Atendi diversas empresas da área e
            pude confirmar que vídeos e filmes se tornaram essenciais nos dias de hoje.
            Um jeito eficiente de se comunicar com diferentes gerações e estilos.
          </p>
        </div>
        <div className="quem-col">
          <img src={Richard} alt="Richard" />
        </div>
        <div className="quem-col">
          <h2>Richard Valentini</h2>
          <h4>
            Diretor, Roteirista e Produtor Audiovisual
          </h4>
          <p>
          Dizem que sou pragmático, mas prezo pela excelência, pelo propósito e pelo significado. 
          Mais de uma década de audiovisual, me deram a sabedoria para equilibrar as necessidades do mercado e as minhas ambições artísticas. 
          Trabalhar com projetos inovadores, desafiadores e que apostem no potencial mais elevado do Ser-Humano, é o que me motiva.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuemSomos
