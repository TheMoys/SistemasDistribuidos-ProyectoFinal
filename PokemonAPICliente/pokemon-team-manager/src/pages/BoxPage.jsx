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
              <p>Nivel: {pokemon.nivel}</p>
              <p>Tipo: {pokemon.tipo.join(", ")}</p>
              <p>Objeto: {pokemon.objeto}</p>
              <p>Ataques: {pokemon.ataques.join(", ")}</p>
              <button onClick={() => onRemove(pokemon)}>Eliminar de la caja</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxPage;