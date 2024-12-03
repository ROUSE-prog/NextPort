import React, { useState } from 'react';

const Playground = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the animation after it's complete
    setTimeout(() => {
      setIsClicked(false);
    }, 300); // Animation duration (adjust if needed)
  };

  return (
    <section
      id="playground"
      className="flex items-center justify-center h-screen"
    >
      <button
        onClick={handleClick}
        className={`w-6 h-5 bg-gradient-to-r hover:from-sky-500 hover:to-orange-200 rounded-md ${
          isClicked ? 'animate-pulse' : ''
        }`}
        style={{
          transition: 'transform 0.1s ease',
          transform: isClicked ? 'scale(1.5)' : 'scale(1)',
        }}
      ></button>
    </section>
  );
};

export default Playground;
