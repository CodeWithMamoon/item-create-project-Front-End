// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axios';

const ItemForm = ({ itemToEdit, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/${id}`)
        .then(res => {
          const item = res.data;
          setName(item.name);
          setPrice(item.price);
          setDescription(item.description);
        })
        .catch(err => alert(err.message));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemData = {
      name,
      price,
      description,
    };

    if (id) {
      axios.put(`/${id}`, itemData)
        .then(() => {
          alert('Item updated successfully!');
          navigate('/');
        })
        .catch(err => alert(err.message));
    } else {
      axios.post('/', itemData)
        .then(() => {
          alert('Item created successfully!');
          navigate('/');
        })
        .catch(err => alert(err.message));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">{id ? 'Update Item' : 'Create Item'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {id ? 'Update Item' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
