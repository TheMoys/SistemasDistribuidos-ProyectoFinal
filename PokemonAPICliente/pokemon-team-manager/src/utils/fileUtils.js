import axios from 'axios';

const API_URL = 'https://localhost:7244/api/Pokemon';
const TEAM_API_URL = `${API_URL}/equipo`;

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

export const deletePokemonFromFile = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting Pokémon:', error.response.data);
    throw error;
  }
};

export const addPokemonToTeam = async (id) => {
  try {
    const response = await axios.post(`${TEAM_API_URL}/${id}`, null, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding Pokémon to team:', error.response.data);
    throw error;
  }
};

export const removePokemonFromTeam = async (id) => {
  try {
    await axios.delete(`${TEAM_API_URL}/${id}`);
  } catch (error) {
    console.error('Error removing Pokémon from team:', error.response.data);
    throw error;
  }
};

export const loadTeamFromFile = async () => {
  try {
    const response = await axios.get(TEAM_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error loading team data:', error);
    return [];
  }
};