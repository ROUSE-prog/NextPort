import React from 'react';

const WelcomeContainer = ({ activeTheme, setActiveTheme }) => {
  const themes = ['theme-water', 'theme-earth', 'theme-air', 'theme-fire', 'theme-ether'];

  const changeTheme = (theme) => {
    setActiveTheme(theme);
  };

  return (
    <section
      className={`welcome-container bg-gradient-to-r from-[rgba(82,82,82,0.5)] to-[rgba(38,191,191,0.5)] bg-opacity-60 items-center rounded-sm shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group py-16 px-8 text-center ${activeTheme}`}
      id="welcome"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Hi, Im Steven.</h1>
        <p className="text-lg text-stone-50 mb-6">
          I specialize in creating user-focused, visually stunning applications blending art and technology. Choose a theme below to heighten your experience.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {themes.map((theme) => (
          <button
            key={theme}
            className={`inline-block py-2 px-4 bg-gradient-to-r from-stone-700 text-white rounded-sm shadow-md font-semibold transition-all hover:scale-105 ${
              theme === 'theme-water'
                ? 'bg-opacity-40 bg-gradient-to-r  hover:from-sky-700 '
                : theme === 'theme-earth'
                ? 'bg-opacity-40 bg-gradient-to-r  hover:from-green-900 '
                : theme === 'theme-air'
                ? 'bg-opacity-40 bg-gradient-to-r  hover:from-slate-800 hover:text-slate-400'
                : theme === 'theme-fire'
                ? ' bg-opacity-40 bg-gradient-to-r hover:from-orange-800'
                : ' bg-opacity-40 bg-gradient-to-r  hover:from-amber-400 '
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
