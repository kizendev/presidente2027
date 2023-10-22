import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import Propuestas from './components/Propuestas';

function App() {
  return (
    <div className="px-4 py-2 max-w-xl mx-auto">
      <Header title="Nombre" />
      <HeroImage />
      <Propuestas />
    </div>
  );
}

export default App;
