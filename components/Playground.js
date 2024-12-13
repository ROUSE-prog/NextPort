import React, { useState } from 'react';

const Playground = ({ activeTheme }) => {
  const [showMessage, setShowMessage] = useState(true); // Track if the message should be displayed

  const handleClick = () => {
    setShowMessage(false); // Hide the message on click
  };

  return (
    <section
      id="playground"
      className={`playground-container relative flex items-center justify-center h-screen ${activeTheme}`}
      onClick={handleClick} // Handle click to hide message
    >
      {/* Text Message */}
      {showMessage && (
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-sm shadow-md bg-gradient-to-r text-white from-[rgba(30,152,152,0.5)] to-[rgba(144,89,59,0.5)] flex items-center justify-between gap-4 transition-opacity duration-300 ease-in-out hover:scale-105 hover:shadow-lg group ${
            !showMessage ? 'opacity-0' : 'opacity-100'
          } ${activeTheme}`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Semi-transparent background
        >
          <span className="font-semibold text-lg whitespace-nowrap">
            Click this container to see code generate art!
          </span>
        </div>
      )}

      {/* Main Interactive Area */}
      <div className="art-container w-full h-full">{/* Art content goes here */}</div>
    </section>
  );
};

export default Playground;
