import React from 'react';
import Slider from 'react-slick';
import './equipe.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Equipe = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="equipe-container">
      <div className="equipe-content">
        <h1 className="equipe-title">Quem somos?</h1>
        <p className="equipe-text">
          A G A S Transportes atua no mercado desde 2018, com sede na cidade de Jundiaí, São Paulo. 
          A empresa oferece serviços de transporte para cargas gerais e cargas de temperatura controlada. 
          Seu compromisso é atender todas as etapas do deslocamento de insumos ou produtos acabados desde o fornecedor até o destino final, abrangendo todo o território brasileiro.
        </p>
        <div className="equipe-image">
          <Slider {...carouselSettings}>
            <div>
              <img src={require("../img/banner1.png")} alt="Carousel 1" />
              <p className="legend">Por que fazemos o que fazemos</p>
            </div>
            <div>
              <img src={require("../img/banner1.png")} alt="Carousel 2" />
              <p className="legend">Nossa visão</p>
            </div>
          </Slider>
        </div>

        
        <section className="equipe-section">
          <h2 className="equipe-section-title">Conheça nosso time</h2>
          <div className="equipe-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="equipe-member">
                <img src={require(`../img/${member.image}`)} alt={member.name} />
                <p className="equipe-member-name">{member.name}</p>
                <p className="equipe-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const teamMembers = [
  { name: 'Diego Gonçalves', role: 'Diretor Operacional', image: 'foto.png' },
  { name: 'Vanessa Jansen', role: 'Diretora ADM/Financeiro', image: 'foto.png' },
  { name: 'Alba Américo', role: 'Diretora Comercial', image: 'foto.png' },
  { name: 'João Victor', role: 'Executivo Comercial', image: 'foto.png' },
  { name: 'Bruna Franco', role: 'Recursos Humanos', image: 'foto.png' },
  { name: 'Jefferson Dias', role: 'Gerenciamento de Riscos', image: 'foto.png' },
  { name: 'Anna Paula', role: 'Monitoramento', image: 'foto.png' },
];

export default Equipe;
