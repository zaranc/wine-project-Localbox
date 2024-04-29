import React from 'react';

const WineItem = ({ wine, onEdit, onDelete }) => (
  <tr>
    <td>{wine.id}</td>
    <td>{wine.name}</td>
    <td>{wine.vintage}</td>
    <td>{wine.region}</td>
    <td>{wine.type}</td>
    <td>{wine.grape}</td>
    <td>{wine.price}</td>
    <td>
      <button className="edit-button" onClick={onEdit}>Edit</button>
      &nbsp; &nbsp;
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </td>
  </tr>
);

export default WineItem;
