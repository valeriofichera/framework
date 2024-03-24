import React, { useState } from 'react';
import Image from 'next/image';
import clipboard from '@/public/clipboard.svg'


const Clipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        type="text"
        value={text}
        readOnly
        className="text-white"
      >
            {text}
        </div>
    

      <button
        onClick={handleCopy}
        className={`text-white text-sm font-light py-2 px-4 ${copied ? '' : ''}`}
      >
        <Image src={clipboard} alt="Logo" width={50} />
        {copied ? 'Copied!' : 'Copy'}
      </button>
      </div>

  );
};

export default Clipboard;
