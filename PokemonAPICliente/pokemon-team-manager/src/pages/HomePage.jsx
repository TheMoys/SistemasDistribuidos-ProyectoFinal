// HomePage.jsx
import React from 'react';
import './HomePage.css';
import pokemonData from '../pokemonData';

function HomePage({ onAddToTeam, onAddToBox }) {
  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="pokemon-list">
        {pokemonData.map((pokemon) => (
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
            <button onClick={() => onAddToTeam(pokemon)}>Añadir al equipo</button>
            <button onClick={() => onAddToBox(pokemon)}>Añadir a la caja</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;