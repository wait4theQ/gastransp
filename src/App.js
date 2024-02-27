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
    </div>
  );
}

export default App;
