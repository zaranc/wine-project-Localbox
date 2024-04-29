//--------------- AUTO ID GENERATE-------------------------------------

const STORAGE_KEY = 'wineStore';

// Load wines from local storage
const loadWines = () => {
  const winesJson = localStorage.getItem(STORAGE_KEY);
  return winesJson ? JSON.parse(winesJson) : [];
};

// Save wines to local storage
const saveWines = (wines) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wines));
};

// Update a specific wine by ID
const updateWine = (updatedWine) => {
  const wines = loadWines();
  const newWines = wines.map((wine) =>
    wine.id === updatedWine.id ? updatedWine : wine
  );
  saveWines(newWines);
  return newWines;
};

// Delete a specific wine by ID
const deleteWine = (id) => {
  const wines = loadWines();
  const newWines = wines.filter((wine) => wine.id !== id);
  saveWines(newWines);
  return newWines;
};

export { loadWines, saveWines, updateWine, deleteWine };
