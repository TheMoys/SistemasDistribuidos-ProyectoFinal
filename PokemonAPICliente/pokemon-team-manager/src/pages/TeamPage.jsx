// TeamPage.jsx
import React from 'react';
import './TeamPage.css';

function TeamPage({ team, onRemove }) {
  return (
    <div>
      <h1>Equipo Pokémon</h1>
      {team.length === 0 ? (
        <p>No hay Pokémon en el equipo</p>
      ) : (
        <div className="pokemon-list">
          {team.map((pokemon) => (
            <div key={pokemon.id} className={`pokemon-card ${pokemon.tipo[0]}`}>
              <img src={pokemon.imagen} alt={pokemon.nombre} />
              <h2>{pokemon.nombre}</h2>
              <p>Nivel: {pokemon.nivel}</p>
              <p>Tipo: {pokemon.tipo.join(", ")}</p>
              <p>Objeto: {pokemon.objeto}</p>
              <p>Ataques: {pokemon.ataques.join(", ")}</p>
              <button onClick={() => onRemove(pokemon)}>Eliminar del equipo</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamPage;