import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

function App() {
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length < 6) setTeam([...team, pokemon]);
    else alert("El equipo ya tiene 6 Pokémon");
  };

  const removeFromTeam = (pokemon) => setTeam(team.filter((p) => p.id !== pokemon.id));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToTeam={addToTeam} />}
        />
        <Route
          path="/team"
          element={<TeamPage team={team} onRemove={removeFromTeam} />}
        />
      </Routes>
    </Router>
  );
}

export default App;