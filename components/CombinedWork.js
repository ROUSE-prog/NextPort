import React from 'react';

const CombinedWork = ({ combinedWork }) => {
  return (
    <div className="combined-work-container bg-glass py-12 px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8 text-slate-200 text-center">Recent Work & Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {combinedWork.map((work, index) => (
          <div
            key={index}
            className="work-card bg-amber-100 bg-opacity-50 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h4 className="text-sm uppercase font-bold text-gray-700 mb-2">{work.type}</h4>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{work.title}</h3>
              <p className="text-gray-700">{work.description}</p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block"
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
