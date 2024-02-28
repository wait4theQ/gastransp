import React from 'react';
import './clients.css';

const Clients = () => {
  const clientLogos = [
    { id: 1, name: 'Client 1', logo: 'logo1.png', link: '' },
    { id: 2, name: 'Client 2', logo: 'logo1.png', link: '' },
    { id: 3, name: 'Client 3', logo: 'logo1.png', link: '' },
    { id: 4, name: 'Client 4', logo: 'logo1.png', link: '' },
    { id: 5, name: 'Client 5', logo: 'logo1.png', link: '' },
    { id: 6, name: 'Client 6', logo: 'logo1.png', link: '' },
    { id: 7, name: 'Client 7', logo: 'logo1.png', link: '' },
  ];

  return (
    <div className="clients-container">
      <h2 className="clients-title">Nossos Clientes</h2>
      <div className="clients-logos">
        {clientLogos.map((client) => (
          <a key={client.id} href={client.link} target="_blank" rel="noopener noreferrer" className="client-logo">
            <img src={require(`../img/${client.logo}`)} alt={client.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
