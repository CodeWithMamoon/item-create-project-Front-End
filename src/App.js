// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <nav className="bg-blue-500 text-white p-4 rounded-md shadow-md flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Item Manager</h1>
          <div>
            <Link to="/" className="mr-4 hover:underline">
              Home
            </Link>
            <Link to="/create" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Create Item
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<ItemForm />} />
          <Route path="/edit/:id" element={<ItemForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
