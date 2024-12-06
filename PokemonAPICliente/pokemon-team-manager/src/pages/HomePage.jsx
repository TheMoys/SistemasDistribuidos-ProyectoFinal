import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { loadDataFromFile, addPokemonToFile } from '../utils/fileUtils';
import AddPokemonModal from '../components/AddPokemonModal';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function HomePage({ onAddToTeam, onAddToBox }) {
  const [pokemons, setPokemons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const storedPokemons = await loadDataFromFile();
      setPokemons(storedPokemons);
    };
    fetchData();
  }, []);

  const addPokemon = async (nuevoPokemon) => {
    try {
      const addedPokemon = await addPokemonToFile(nuevoPokemon);
      setPokemons([...pokemons, addedPokemon]);
    } catch (error) {
      console.error('Error adding Pokémon:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <button onClick={() => setIsModalOpen(true)}>Añadir Pokémon</button>
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
      <AddPokemonModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onAddPokemon={addPokemon}
      />
    </div>
  );
}

export default HomePage;