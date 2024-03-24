import React, { useState } from 'react';

import Image from 'next/image';
import graph from '@/public/graph.svg'
import Dropdown from './Dropdown';
import FarcasterUrl from './FarcasterUrl';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const entry = {
      id: Date.now(), // Unique ID for the entry, for demonstration
      content: inputValue,
    };

    // Send a POST request to the API route
    await fetch('/api/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    setInputValue('');
    setShowConfirmation(true); // Show confirmation on submit
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(false); // Hide confirmation on left-click
  };

  return (
    <div className='mt-12 mx-44 flex flex-col items-center text-white'>

        <div className='text-lg font-bold mb-12'>
            Lets create some Charts on Farcaster!
        </div>

        <div className='flex flex-col items-center'>
        <div className='text-md font-bold'>
            Step 1
        </div>
        <div className='text-sm font light'>
            Choose Data Source
        </div>

        <Dropdown/>
        <div className='flex flex-row items-center gap-2 my-2 text-sm font light'>
            powered by
            <span>
            <Image src={graph} alt="graph" width={100} />
            </span>
        </div>
        
        </div>

        <div className='flex flex-col items-center mt-5'>
        <div className='text-md font-bold'>
            Step 2
        </div>
        <div className='text-sm font light'>
            Select Parameters
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center mt-3">
        <div>
          <label htmlFor="input-field" className="block text-center text-sm font-medium text-white">NFT Contract Address</label>
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

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
        
        </div>


        {showConfirmation && (
  <div 
    onContextMenu={(e) => {
      e.preventDefault(); // Prevent the default context menu from showing
      handleConfirmationClick();
    }} 
    className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center"
  >
    <div className="bg-white p-4 rounded-lg shadow-xl">
      <p className="text-sm font-medium text-gray-700">Form submitted successfully!</p>
    </div>
    <FarcasterUrl inputValue={inputValue}/>
  </div>
)}

    </div>
  );
};

export default FormComponent;
