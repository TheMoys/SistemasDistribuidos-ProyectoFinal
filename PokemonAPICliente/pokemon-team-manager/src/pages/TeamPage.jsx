// TeamPage.jsx
import React, { useState, useEffect } from 'react';
import './TeamPage.css';
import { loadTeamFromFile, removePokemonFromTeam } from '../utils/fileUtils';

function TeamPage() {
  const [team, setTeam] = useState([]);

  const fetchTeamData = async () => {
    const teamPokemons = await loadTeamFromFile();
    setTeam(teamPokemons);
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  const handleRemove = async (pokemon) => {
    try {
      await removePokemonFromTeam(pokemon.id);
      fetchTeamData(); // Volver a cargar los datos después de eliminar
    } catch (error) {
      console.error('Error removing Pokémon from team:', error);
    }
  };

  return (
    <div>
      <h1 className="font-sour-gummy">Equipo Pokémon</h1>
      {team.length === 0 ? (
        <p>No hay Pokémon en el equipo</p>
      ) : (
        <div className="pokemon-list">
          {team.map((pokemon) => (
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
              <button onClick={() => handleRemove(pokemon)}>Eliminar del equipo</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamPage;