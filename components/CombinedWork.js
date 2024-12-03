import React from 'react';

const CombinedWork = ({ combinedWork }) => {
  return (
    <div
      className="combined-work-container bg-glass py-10 px-6 flex flex-col items-center justify-center pt-28" // Adjusted padding for header offset
      id="combined-work"
    >
      <h2 className="text-4xl font-bold mb-8 text-black text-center">
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {combinedWork.map((work, index) => (
          <div
            key={index}
            className="work-card bg-stone-700  bg-opacity-40 rounded-lg shadow-md overflow-hidden hover:bg-stone-900 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
          >
            <div className="p-6">
              <h4 className="text-sm uppercase font-bold text-white mb-2">
                {work.type}
              </h4>
              <h3 className="text-2xl font-extrabold text-white mb-4">
                {work.title}
              </h3>
              <p className="text-white mb-4">{work.description}</p>
              <div className="flex space-x-4">
                {/* Live Site Button */}
                {work.liveSite && (
                  <a
                    href={work.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 hover:shadow-lg transition-all"
                  >
                    Site
                  </a>
                )}

                {/* GitHub Codebase Button */}
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg transition-all"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedWork;
