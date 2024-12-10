import React from 'react';

const CombinedWork = ({ combinedWork, activeTheme }) => {
  const getButtonClasses = () => {
    switch (activeTheme) {
      case 'theme-water':
        return 'bg-gradient-to-r from-sky-300 to-indigo-900 hover:from-sky-400 hover:to-indigo-950';
      case 'theme-earth':
        return ' bg-gradient-to-r from-green-700 to-stone-600 hover:from-green-600 hover:to-stone-700';
      case 'theme-air':
        return 'bg-gradient-to-r from-slate-200 hover:from-slate-50 hover:text-slate-800';
      case 'theme-fire':
        return ' bg-opacity-40 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-800 hover:to-orange-400';
      case 'theme-ether':
        return 'bg-opacity-40 bg-gradient-to-r bg-opacity-40 from-amber-400  hover:from-slate-500';
      default:
        return '';
    }
  };

  const buttonClasses = getButtonClasses();

  return (
    <div
      className={`combined-work-container flex flex-col items-center justify-center pt-28 py-12 px-6 text-center`}
      id="combined-work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {combinedWork.map((work, index) => (
          <div
            key={index}
            className={`work-card bg-stone-700 bg-opacity-40 items-center rounded-sm shadow-md overflow-hidden hover:bg-stone-900 hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group ${activeTheme}`}
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-sm uppercase font-bold text-white mb-2">
                  {work.type}
                </h4>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {work.title}
                </h3>
                <p className="text-white mb-4">{work.description}</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Live Site Button */}
                {work.liveSite && (
                  <a
                    href={work.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-stone-700 py-2 px-4 rounded-sm shadow-md transition-all ${buttonClasses}`}
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
                    className={`inline-block bg-stone-700 py-2 px-4 rounded-sm shadow-md transition-all ${buttonClasses}`}
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
