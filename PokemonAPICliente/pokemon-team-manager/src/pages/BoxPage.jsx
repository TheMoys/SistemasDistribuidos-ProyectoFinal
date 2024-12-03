import React from 'react';
import './BoxPage.css';

function BoxPage({ box, onRemove }) {
  return (
    <div className="box-container">
      <h1 className="box-title">Your Pokémon Box</h1>
      <div className="box-list">
        {box.length === 0 ? (
          <p className="no-pokemon">No Pokémon in your box</p>
        ) : (
          box.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.image} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
              <button onClick={() => onRemove(pokemon)}>Remove from Box</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BoxPage;