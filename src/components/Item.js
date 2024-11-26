// src/components/Item.js
import React from 'react';

const Item = ({ item, onDelete, onEdit }) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onDelete(item._id)}>Delete</button>
    </li>
  );
};

export default Item;
