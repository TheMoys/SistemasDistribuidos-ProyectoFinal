import React from 'react';
import './TeamPage.css';

function TeamPage({ team, onRemove }) {
  return (
    <div className="team-container">
      <h1 className="team-title">Your Pokémon Team</h1>
      <div className="team-list">
        {team.length === 0 ? (
          <p className="no-pokemon">No Pokémon in your team</p>
        ) : (
          team.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.image} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
              <button onClick={() => onRemove(pokemon)}>Remove from Team</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TeamPage;