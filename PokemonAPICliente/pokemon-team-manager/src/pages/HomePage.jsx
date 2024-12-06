import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { loadDataFromFile } from '../utils/fileUtils';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function HomePage({ onAddToTeam, onAddToBox }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedPokemons = await loadDataFromFile();
      setPokemons(storedPokemons);
      console.log('POKEMOOOOOOOOOOON22222222222', storedPokemons);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="pokemon-list">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className={`pokemon-card ${pokemon.tipo && pokemon.tipo[0] ? capitalizeFirstLetter(pokemon.tipo[0]) : ''}`}>
              <h2>{pokemon.nombre}</h2>
              <div className="info">
                <span className="tipo">Tipo: {pokemon.tipo ? pokemon.tipo.map(capitalizeFirstLetter).join(", ") : 'Desconocido'}</span>
              </div>
              <div className="info">
                <span className="objeto">Objeto: {pokemon.objeto || 'Ninguno'}</span>
              </div>
              <div className="info">
                <span className="nivel">Nivel: {pokemon.nivel}</span>
              </div>
              <button onClick={() => onAddToTeam(pokemon)}>Añadir al equipo</button>
              <button onClick={() => onAddToBox(pokemon)}>Añadir a la caja</button>
            </div>
          ))
        ) : (
          <p>No hay Pokémon disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;