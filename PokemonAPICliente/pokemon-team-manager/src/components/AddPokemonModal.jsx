import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AddPokemonModal.css';

Modal.setAppElement('#root');

function AddPokemonModal({ isOpen, onRequestClose, onAddPokemon, pokemonToEdit }) {
  const [nombre, setNombre] = useState('');
  const [nivel, setNivel] = useState('');
  const [tipo, setTipo] = useState('');
  const [objeto, setObjeto] = useState('');

  useEffect(() => {
    if (pokemonToEdit) {
      setNombre(pokemonToEdit.Nombre);
      setNivel(pokemonToEdit.Nivel);
      setTipo(pokemonToEdit.Tipo.join(', '));
      setObjeto(pokemonToEdit.Objeto);
    } else {
      setNombre('');
      setNivel('');
      setTipo('');
      setObjeto('');
    }
  }, [pokemonToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPokemon = {
      Id: pokemonToEdit ? pokemonToEdit.Id : Date.now(),
      Nombre: nombre,
      Nivel: parseInt(nivel),
      Tipo: tipo.split(',').map(t => t.trim()),
      Objeto: objeto
    };
    console.log(nuevoPokemon);
    onAddPokemon(nuevoPokemon);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Añadir/Editar Pokémon">
      <div className="modal-header">{pokemonToEdit ? 'Editar Pokémon' : 'Añadir Pokémon'}</div>
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
        <button type="submit">{pokemonToEdit ? 'Guardar cambios' : 'Añadir'}</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
}

export default AddPokemonModal;