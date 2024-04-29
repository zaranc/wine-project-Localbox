import React, { useState, useEffect } from 'react';

const WineForm = ({ onSubmit, initialWine }) => {
  const [name, setName] = useState('');
  const [vintage, setVintage] = useState('');
  const [region, setRegion] = useState('');
  const [wineType, setWineType] = useState('');
  const [grape, setGrape] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (initialWine) {
      setName(initialWine.name);
      setVintage(initialWine.vintage);
      setRegion(initialWine.region);
      setWineType(initialWine.type);
      setGrape(initialWine.grape);
      setPrice(initialWine.price);
    } else {
      // Reset form fields when not editing
      setName('');
      setVintage('');
      setRegion('');
      setWineType('');
      setGrape('');
      setPrice('');
    }
  }, [initialWine]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !vintage || !region || !wineType || !grape || !price)  {
      alert("All fields are required!");
      return;
    }

    const wineData = {
      id: initialWine?.id || new Date().getTime(),
      name,
      vintage,
      region,
      type: wineType,
      grape,
      price,
    };

    onSubmit(wineData); // Trigger parent component's onSubmit
  };

  return (
    <div>
      <h2>{initialWine ? 'Edit Wine' : 'Add Wine'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vintage:</label>
          <input
            type="text"
            value={vintage}
            onChange={(e) => setVintage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Region:</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            value={wineType}
            onChange={(e) => setWineType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grape:</label>
          <input
            type="text"
            value={grape}
            onChange={(e) => setGrape(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WineForm;
