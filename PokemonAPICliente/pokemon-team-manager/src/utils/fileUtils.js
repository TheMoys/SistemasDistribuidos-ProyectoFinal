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

export const updatePokemonInFile = async (id, pokemon) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, pokemon, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating Pokémon:', error.response.data);
    throw error;
  }
};

export const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error.response.data);
    throw error;
  }
};