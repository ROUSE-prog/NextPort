import React from 'react';

const WelcomeContainer = ({ activeTheme, setActiveTheme }) => {
  const themes = ['theme-water', 'theme-earth', 'theme-air', 'theme-fire', 'theme-ether'];

  const changeTheme = (theme) => {
    setActiveTheme(theme);
  };

  return (
    <section
      className={`welcome-container bg-stone-700 bg-opacity-60 items-center rounded-sm shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group py-16 px-8 text-center ${activeTheme}`}
      id="welcome"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Hi, I'm Steven!</h1>
        <p className="text-lg text-stone-50 mb-6">
          I specialize in creating user-focused, visually stunning applications blending art and technology.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {themes.map((theme) => (
          <button
            key={theme}
            className={`inline-block py-2 px-4 rounded-sm shadow-md font-semibold transition-all hover:scale-105 ${
              theme === 'theme-water'
                ? 'bg-opacity-40 bg-gradient-to-r from-sky-300 to-indigo-900 hover:from-sky-400 hover:to-indigo-950'
                : theme === 'theme-earth'
                ? 'bg-opacity-40 bg-gradient-to-r from-green-700 to-stone-600 hover:from-green-600 hover:to-stone-700'
                : theme === 'theme-air'
                ? 'bg-opacity-40 bg-gradient-to-r from-slate-200 hover:from-slate-50 hover:text-slate-800'
                : theme === 'theme-fire'
                ? ' bg-opacity-40 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-800 hover:to-orange-400'
                : ' bg-opacity-40 bg-gradient-to-r from-slate-60 to-amber-300 hover:bg-gradient-to-r  hover:from-teal-700'
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

export default WelcomeContainer;
