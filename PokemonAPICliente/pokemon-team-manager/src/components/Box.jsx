const Box = ({ box, onRemove }) => (
    <div>
      <h2>Caja de Pokémon</h2>
      <ul>
        {box.map(poke => (
          <li key={poke.id}>
            {poke.name} ({poke.type})
            <button onClick={() => onRemove(poke)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Box;
  