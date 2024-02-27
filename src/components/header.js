import React from 'react';
import './header.css';


const logoImage = require('../img/logo1.png');

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
