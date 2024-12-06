import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AddPokemonModal.css';

Modal.setAppElement('#root');

function AddPokemonModal({ isOpen, onRequestClose, onAddPokemon, pokemonToEdit }) {
  const [nombre, setNombre] = useState('');
  const [nivel, setNivel] = useState('');
  const [tipo, setTipo] = useState('');
  const [objeto, setObjeto] = useState('');
  const [ataques, setAtaques] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    if (pokemonToEdit) {
      setNombre(pokemonToEdit.nombre);
      setNivel(pokemonToEdit.nivel);
      setTipo(pokemonToEdit.tipo.join(', '));
      setObjeto(pokemonToEdit.objeto);
      setAtaques(pokemonToEdit.ataques.join(', '));
      setImagen(pokemonToEdit.imagen);
    } else {
      setNombre('');
      setNivel('');
      setTipo('');
      setObjeto('');
      setAtaques('');
      setImagen('');
    }
  }, [pokemonToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPokemon = {
      id: pokemonToEdit ? pokemonToEdit.id : Date.now(),
      nombre,
      nivel: parseInt(nivel),
      tipo: tipo.split(',').map(t => t.trim()),
      objeto,
      ataques: ataques.split(',').map(a => a.trim()),
      imagen
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
        <label>
          Ataques (separados por coma):
          <input type="text" value={ataques} onChange={(e) => setAtaques(e.target.value)} required />
        </label>
        <label>
          Imagen URL:
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
        </label>
        <button type="submit">{pokemonToEdit ? 'Guardar cambios' : 'Añadir'}</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
}

export default AddPokemonModal;