import React from 'react';

const CombinedWork = ({ combinedWork }) => {
  return (
    <div className="combined-work-container bg-glass py-12 px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8 text-black text-center">Recent Work & Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {combinedWork.map((work, index) => (
          <div
            key={index}
            className="work-card bg-black bg-opacity-40 rounded-lg shadow-md overflow-hidden hover:bg-black  hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
          >
            <div className="p-6">
              <h4 className="text-sm uppercase font-bold text-stone-100 mb-2">{work.type}</h4>
              <h3 className="text-2xl font-extrabold text-stone-200 mb-4">{work.title}</h3>
              <p className="text-stone-300">{work.description}</p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-700 mt-2 block"
                >
                  View on OpenProcessing →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedWork;
