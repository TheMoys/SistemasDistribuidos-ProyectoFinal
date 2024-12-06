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
      updatedPokemons = pokemons.map(p => p.id === pokemonToEdit.id ? nuevoPokemon : p);
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