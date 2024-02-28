import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </div>

      <hr className="footer-divider" />

      <div className="footer-info">
        <div className="footer-info-left">
          <h3>Endereço</h3>
          <p>Rua Admir Doprado Mowel, 242</p>
          <p>Itupeva - SP 13295-000, BR</p>
        </div>
        <div className="footer-info-center">
          <h3>Contato</h3>
          <p>Email: diego.goncalves@gastransportes.com.br</p>
        </div>
        <div className="footer-info-right">
          <h3>GAS TRANSPORTES</h3>
        </div>
      </div>

      <div className="footer-cnpj">
        <p>GAS Transportes Todos os direitos reservados © 2014</p>
       
      </div>
    </footer>
  );
};

export default Footer;
