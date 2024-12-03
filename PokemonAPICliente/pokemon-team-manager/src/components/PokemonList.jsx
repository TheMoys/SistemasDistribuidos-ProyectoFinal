import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = ({ onAddToTeam, onAddToBox }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('/pokemon') // URL del endpoint de tu API
      .then(response => setPokemon(response.data))
      .catch(error => console.error('Error al cargar Pokémon:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemon.map(poke => (
          <li key={poke.id}>
            {poke.name} ({poke.type})
            <button onClick={() => onAddToTeam(poke)}>Añadir al Equipo</button>
            <button onClick={() => onAddToBox(poke)}>Añadir a la Caja</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
