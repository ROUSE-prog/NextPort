import React, { useState } from 'react';

const Playground = () => {
  const [showMessage, setShowMessage] = useState(true); // Track if the message should be displayed

  const handleClick = () => {
    setShowMessage(false); // Hide the message on click
  };

  return (
    <section
      id="playground"
      className="playground-container relative flex items-center justify-center h-screen text-white"
      onClick={handleClick} // Handle click to hide message
    >
      {/* Text Message */}
      {showMessage && (
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 text-center text-lg px-6 py-3 bg-sky-700 bg-opacity-40 rounded-sm hover:bg-sky-900 hover:bg-opacity-80 hover:scale-105 hover:transition-transform hover:duration-300 ease-in-out hover:shadow-lg group transition-opacity duration-500 ${
            !showMessage ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Click the screen to see code generate art
        </div>
      )}

      {/* Main Interactive Area */}
      <div className="art-container w-full h-full">
        {/* Add your code to generate art here */}
        <p className="text-center">[Your code-generated art will appear here.]</p>
      </div>
    </section>
  );
};

export default Playground;
