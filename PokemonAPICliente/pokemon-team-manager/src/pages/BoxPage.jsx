// BoxPage.jsx
import React from 'react';
import './BoxPage.css';

function BoxPage({ box, onRemove }) {
  return (
    <div>
      <h1>Caja Pokémon</h1>
      {box.length === 0 ? (
        <p>No hay Pokémon en la caja</p>
      ) : (
        <div className="pokemon-list">
          {box.map((pokemon) => (
            <div key={pokemon.id} className={`pokemon-card ${pokemon.tipo[0]}`}>
              <img src={pokemon.imagen} alt={pokemon.nombre} />
              <h2>{pokemon.nombre}</h2>
              <div className="info">
                <span className="tipo">Tipo: {pokemon.tipo.join(", ")}</span>
              </div>
              <div className="info">
                <span className="objeto">Objeto: {pokemon.objeto}</span>
              </div>
              <div className="info">
                <span className="ataques">Ataques: {pokemon.ataques.join(", ")}</span>
              </div>
              <button onClick={() => onRemove(pokemon)}>Eliminar de la caja</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxPage;