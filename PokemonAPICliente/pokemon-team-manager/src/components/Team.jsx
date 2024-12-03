const Team = ({ team, onRemove }) => (
    <div>
      <h2>Equipo Pokémon</h2>
      <ul>
        {team.map(poke => (
          <li key={poke.id}>
            {poke.name} ({poke.type})
            <button onClick={() => onRemove(poke)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Team;
  