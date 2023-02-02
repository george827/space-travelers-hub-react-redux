import React from 'react';
import './App.scss';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/RocketsContainer';
import Missions from './components/MissionsContainer';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="bg-dark App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions/" element={<Missions />} />
        <Route path="/MyProfile/" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
