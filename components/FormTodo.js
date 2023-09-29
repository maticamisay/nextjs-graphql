'use client'
import React, { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      console.log(title);
      setTitle('');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-3">Crear Todo</h2>
      <form onSubmit={handleSubmit} className="flex items-center border rounded shadow-sm overflow-hidden">
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Añade un nuevo todo" 
          className="flex-grow p-2 outline-none"
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 px-4 transition duration-300 ease-in-out"
        >
          Añadir
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
