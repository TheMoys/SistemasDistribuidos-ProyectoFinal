import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import BoxPage from "./pages/BoxPage";

function App() {
  const [team, setTeam] = useState([]);
  const [box, setBox] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length < 6) setTeam([...team, pokemon]);
    else alert("El equipo ya tiene 6 Pokémon");
  };

  const addToBox = (pokemon) => setBox([...box, pokemon]);
  const removeFromTeam = (pokemon) => setTeam(team.filter((p) => p.id !== pokemon.id));
  const removeFromBox = (pokemon) => setBox(box.filter((p) => p.id !== pokemon.id));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToTeam={addToTeam} onAddToBox={addToBox} />}
        />
        <Route
          path="/team"
          element={<TeamPage team={team} onRemove={removeFromTeam} />}
        />
        <Route
          path="/box"
          element={<BoxPage box={box} onRemove={removeFromBox} />}
        />
      </Routes>
    </Router>
  );
}

export default App;