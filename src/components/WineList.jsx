import React from 'react';
import WineItem from './WineItem';

const WineList = ({ wines, onEdit, onDelete }) => (
  <>
  <h2>Wine List</h2>
  <table className="wine-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Vintage</th>
        <th>Region</th>
        <th>Type</th>
        <th>Grape</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {wines.map((wine) => (
        <WineItem
          key={wine.id}
          wine={wine}
          onEdit={() => onEdit(wine)}
          onDelete={() => onDelete(wine.id)}
        />
      ))}
    </tbody>
  </table>
  </>
);

export default WineList;
