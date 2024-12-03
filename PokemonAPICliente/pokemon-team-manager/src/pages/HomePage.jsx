import React from 'react';
import './HomePage.css';

function HomePage({ onAddToTeam, onAddToBox }) {
  // Lista de Pokémon de ejemplo
  const pokemons = [
    { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'Wartortle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'Blastoise', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'Caterpie', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'Metapod', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'Butterfree', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'Weedle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'Kakuna', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'Beedrill', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'Pidgey', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'Pidgeotto', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'Pidgeot', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'Rattata', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'Raticate', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Pokémon Home Page</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <button onClick={() => onAddToTeam(pokemon)}>Add to Team</button>
            <button onClick={() => onAddToBox(pokemon)}>Add to Box</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;