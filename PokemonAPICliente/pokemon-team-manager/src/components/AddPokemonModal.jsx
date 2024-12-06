import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddPokemonModal.css';

Modal.setAppElement('#root');

function AddPokemonModal({ isOpen, onRequestClose, onAddPokemon }) {
  const [nombre, setNombre] = useState('');
  const [nivel, setNivel] = useState('');
  const [tipo, setTipo] = useState('');
  const [objeto, setObjeto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPokemon = {
      nombre,
      nivel: parseInt(nivel),
      tipo: tipo.split(',').map(t => t.trim()),
      objeto
    };
    onAddPokemon(nuevoPokemon);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Añadir Pokémon">
      <div className="modal-header">Añadir Pokémon</div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Nivel:
          <input type="number" value={nivel} onChange={(e) => setNivel(e.target.value)} required />
        </label>
        <label>
          Tipo (separados por coma):
          <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
        </label>
        <label>
          Objeto:
          <input type="text" value={objeto} onChange={(e) => setObjeto(e.target.value)} />
        </label>
        <button type="submit">Añadir</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
}

export default AddPokemonModal;