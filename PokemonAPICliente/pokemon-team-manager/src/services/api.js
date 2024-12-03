import axios from 'axios';

const API_BASE = 'http://localhost:3000'; // Cambia según tu servidor

export const getPokemon = () => axios.get(`${API_BASE}/pokemon`);
export const getTeam = () => axios.get(`${API_BASE}/team`);
export const updateTeam = (team) => axios.post(`${API_BASE}/team`, { team });
export const getBox = () => axios.get(`${API_BASE}/box`);
export const updateBox = (box) => axios.post(`${API_BASE}/box`, { box });
