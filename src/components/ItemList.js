// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('/')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/${id}`)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
        alert('Item deleted successfully!');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-sm mb-2">{item.description}</p>
            <div className="flex justify-between">
              <Link
                to={`/edit/${item._id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
