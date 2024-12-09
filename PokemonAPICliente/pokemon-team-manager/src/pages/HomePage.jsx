import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { loadDataFromFile, addPokemonToFile, updatePokemonInFile, deletePokemonFromFile, addPokemonToTeam, loadTeamFromFile } from '../utils/fileUtils';
import AddPokemonModal from '../components/AddPokemonModal';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function HomePage({ }) {
  const [pokemons, setPokemons] = useState([]);
  const [team, setTeam] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonToEdit, setPokemonToEdit] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);

  const fetchData = async () => {
    const storedPokemons = await loadDataFromFile();
    setPokemons(storedPokemons);
    const teamPokemons = await loadTeamFromFile();
    setTeam(teamPokemons);
  };

  useEffect(() => {
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

  const updatePokemon = async (id, updatedPokemon) => {
    try {
      await updatePokemonInFile(id, updatedPokemon);
      window.location.reload();
    } catch (error) {
      console.error('Error updating Pokémon:', error);
    }
  };

  const deletePokemon = async (id) => {
    try {
      await deletePokemonFromFile(id);
      fetchData(); // Volver a cargar los datos después de eliminar
    } catch (error) {
      console.error('Error deleting Pokémon:', error);
    }
  };

  const handleEditPokemon = (pokemon) => {
    setPokemonToEdit(pokemon);
    setIsModalOpen(true);
  };

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  const handleAddToTeam = async (pokemon) => {
    if (team.length >= 6) {
      alert('No puedes tener más de 6 Pokémon en el equipo.');
      return;
    }
    try {
      await addPokemonToTeam(pokemon.id);
      alert('Pokémon añadido al equipo');
      fetchData(); // Actualizar la lista de Pokémon y el equipo
    } catch (error) {
      console.error('Error adding Pokémon to team:', error);
    }
  };

  return (
    <div>
      <h1 className="font-sour-gummy">Lista de Pokémon</h1>
      <button className='add-pokemon-button' onClick={() => setIsModalOpen(true)}>Añadir Pokémon</button>
      <div className="pokemon-list">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className={`pokemon-card ${pokemon.tipo && pokemon.tipo[0] ? capitalizeFirstLetter(pokemon.tipo[0]) : ''}`}>
              <div className="menu" onClick={() => toggleMenu(pokemon.id)}>
                <span>⋮</span>
                {menuOpen === pokemon.id && (
                  <div className="menu-content">
                    <button onClick={() => handleEditPokemon(pokemon)}>Editar</button>
                    <button onClick={() => deletePokemon(pokemon.id)}>Eliminar</button>
                  </div>
                )}
              </div>
              <img src={pokemon.imagen} alt={pokemon.nombre} />
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
              <div className="info">
                <span className="ataques">Ataques: {pokemon.ataques ? pokemon.ataques.join(", ") : 'Ninguno'}</span>
              </div>
              <button onClick={() => handleAddToTeam(pokemon)}>Añadir al equipo</button>
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
        onUpdatePokemon={updatePokemon}
        pokemonToEdit={pokemonToEdit}
      />
    </div>
  );
}

export default HomePage;