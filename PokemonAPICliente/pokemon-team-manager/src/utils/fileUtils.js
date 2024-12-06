// src/utils/fileUtils.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/pokemons';

export const saveDataToFile = async (data) => {
  try {
    await axios.put(API_URL, data);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export const loadDataFromFile = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};