// --------------- AUTO ID GENERATE-------------------------------------

import React, { useState, useEffect } from 'react';
import './App.css';
import WineForm from './components/WineForm';
import WineList from './components/WineList';
import { loadWines, saveWines, updateWine, deleteWine } from './localStorageUtils';

const App = () => {
  const [wines, setWines] = useState([]);
  const [editingWine, setEditingWine] = useState(null);

  useEffect(() => {
    const savedWines = loadWines(); // Load wines from local storage
    setWines(savedWines);
  }, []);

  const handleAddWine = (wine) => {
    if (editingWine) {
      const updatedWines = updateWine(wine); // Update existing wine
      setWines(updatedWines);
      saveWines(updatedWines);
      setEditingWine(null); // Exit edit mode
    } else {
      const newWines = [...wines, wine]; // Add new wine
      setWines(newWines);
      saveWines(newWines);
    }
  };

  const handleDeleteWine = (id) => {
    const newWines = deleteWine(id); // Delete by ID
    setWines(newWines);
  };

  const handleEditWine = (wine) => {
    setEditingWine(wine); // Set wine to edit mode
  };

  return (
    <div>
      <h1>Wine Store Inventory</h1>
      <WineForm
        onSubmit={handleAddWine}
        initialWine={editingWine} // Pass editingWine to form
      />
      <WineList
        wines={wines}
        onEdit={handleEditWine}
        onDelete={handleDeleteWine}
      />
    </div>
  );
};

export default App;
