"use client"

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingEntries = JSON.parse(localStorage.getItem('formEntries')) || [];
    existingEntries.push(inputValue);
    localStorage.setItem('formEntries', JSON.stringify(existingEntries));

    setInputValue('');
    setShowConfirmation(true); // Show confirmation on submit
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(false); // Hide confirmation on left-click
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="input-field" className="block text-sm font-medium text-white">Enter wallet address:</label>
          <input
            type="text"
            name="input-field"
            id="input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="text-black mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            required
          />
        </div>
        
        <div className='flex items-center ml-44'>
            <Dropdown/>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {showConfirmation && (
        <div onClick={handleConfirmationClick} className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <p className="text-sm font-medium text-gray-700">Form submitted successfully!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FormComponent;

