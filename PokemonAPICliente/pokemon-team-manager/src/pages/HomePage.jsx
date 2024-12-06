import React, { useState, useEffect } from 'react';
import './HomePage.css';
import AddPokemonModal from '../components/AddPokemonModal';
import { saveDataToFile, loadDataFromFile } from '../utils/fileUtils';

function HomePage({ onAddToTeam, onAddToBox }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonToEdit, setPokemonToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedPokemons = await loadDataFromFile();
      setPokemons(storedPokemons);
    };
    fetchData();
  }, []);

  const handleAddPokemon = async (nuevoPokemon) => {
    let updatedPokemons;
    if (pokemonToEdit) {
      updatedPokemons = pokemons.map(p => p.Id === pokemonToEdit.Id ? nuevoPokemon : p);
    } else {
      updatedPokemons = [...pokemons, nuevoPokemon];
    }
    setPokemons(updatedPokemons);
    await saveDataToFile(updatedPokemons);
    setPokemonToEdit(null);
  };

  const handleEditPokemon = (pokemon) => {
    setPokemonToEdit(pokemon);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <button className="add-pokemon-button" onClick={() => setIsModalOpen(true)}>Añadir Pokémon</button>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.Id} className={`pokemon-card ${pokemon.Tipo[0]}`}>
            <h2>{pokemon.Nombre}</h2>
            <div className="info">
              <span className="tipo">Tipo: {pokemon.Tipo.join(", ")}</span>
            </div>
            <div className="info">
              <span className="objeto">Objeto: {pokemon.Objeto || 'Ninguno'}</span>
            </div>
            <div className="info">
              <span className="nivel">Nivel: {pokemon.Nivel}</span>
            </div>
            <button onClick={() => onAddToTeam(pokemon)}>Añadir al equipo</button>
            <button onClick={() => onAddToBox(pokemon)}>Añadir a la caja</button>
            <button onClick={() => handleEditPokemon(pokemon)}>Editar</button>
          </div>
        ))}
      </div>
      <AddPokemonModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onAddPokemon={handleAddPokemon}
        pokemonToEdit={pokemonToEdit}
      />
    </div>
  );
}

export default HomePage;