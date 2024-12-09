import React from 'react';

const themes = ['theme-water', 'theme-earth', 'theme-air', 'theme-fire', 'theme-ether'];

const ThemeSelector = ({ activeTheme, setActiveTheme }) => {
  const changeTheme = (theme) => {
    setActiveTheme(theme); // Update the active theme
  };

  return (
    <section
      id="theme-selector"
      className={`p-6 rounded-sm shadow-md text-stone-100 py-12 px-6 text-center max-w-2xl mx-auto my-12 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg group ${activeTheme}`}
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Choose Your Theme</h2>
      <p className="text-lg text-white mb-8">
        Personalize your experience by selecting a theme. Each theme represents one of the elements: Water, Earth, Air, Fire, or Ether.
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        {themes.map((theme) => (
          <button
            key={theme}
            className={`inline-block bg-stone-500 text-stone-400 py-2 px-4 rounded-sm shadow-md font-semibold transition-all ${
              theme === 'theme-water'
                ? 'hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-950'
                : theme === 'theme-earth'
                ? 'hover:bg-gradient-to-r hover:from-green-800 hover:to-stone-700'
                : theme === 'theme-air'
                ? 'hover:bg-gradient-to-r hover:from-slate-50 hover:text-slate-800'
                : theme === 'theme-fire'
                ? 'hover:bg-gradient-to-r hover:from-orange-800 hover:to-orange-400'
                : 'hover:bg-gradient-to-r hover:from-slate-800 hover:to-amber-400'
            }`}
            onClick={() => changeTheme(theme)}
          >
            {theme.replace('theme-', '').toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ThemeSelector;
