import React from 'react';
import './App.css';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-image">
        <div className="content">
          <h1 className="title">Bem-vindo a GAS TRANSPORTES</h1>
          <p className="text">Fale de você ou de sua empresa aqui.</p>
          <button className="transparent-button">Conte-nos mais</button>
        </div>
      </div>
      
      <div className="company-section">
        <div className="company-content">
          <div className="company-image">
            
            <img src={require("./img/foto.png")} alt="Imagem da Empresa" />
          </div>
          <div className="company-description">
            <h2 style={{ color: '#333' }}>Aqui você pode contar mais sobre sua empresa.</h2>
            <p>Tem algo mais a dizer ou mostrar? Pode usar esta seção para isso. Adicione fotos e uma curta descrição para mostrar aos visitantes o que mais você desejar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
