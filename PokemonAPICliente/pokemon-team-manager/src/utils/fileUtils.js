// src/utils/fileUtils.js
import axios from 'axios';

const API_URL = 'https://localhost:7244/api/Pokemon';

export const loadDataFromFile = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};

export const addPokemonToFile = async (pokemon) => {
  console.log('Adding Pokémon:', pokemon);
  try {
    const response = await axios.post(API_URL, pokemon, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding Pokémon:', error.response.data);
    throw error;
  }
};