import React from 'react';

const Contact = ({ activeTheme }) => {
  const getButtonClasses = () => {
    switch (activeTheme) {
      case 'theme-water':
        return 'bg-opacity-40 bg-gradient-to-r bg-opacity-40 from-sky-300 to-indigo-900 hover:from-sky-400 hover:to-indigo-950';
      case 'theme-earth':
        return 'bg-opacity-40 bg-gradient-to-r bg-opacity-40 from-green-700 to-stone-600 hover:from-green-600 hover:to-stone-700';
      case 'theme-air':
        return 'bg-opacity-40 bg-gradient-to-r bg-opacity-40 from-slate-200 hover:from-slate-50 hover:text-slate-800';
      case 'theme-fire':
        return 'bg-opacity-40 bg-gradient-to-r bg-opacity-40 from-orange-500 to-orange-700 hover:from-orange-800 hover:to-orange-400';
        case 'theme-ether':
          return ' bg-opacity-40 bg-gradient-to-r from-slate-60 to-amber-300 hover:bg-gradient-to-r  hover:from-teal-700';
      default:
        return '';
    }
  };

  const buttonClasses = getButtonClasses();

  return (
    <section
      id="contact"
      className={`bg-stone-700 bg-opacity-40 p-6 rounded-sm shadow-md text-stone-100 py-12 px-6 text-center max-w-2xl mx-auto my-12 hover:bg-stone-900 hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group ${activeTheme}`}
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Contact / Connect</h2>
      <p className="text-lg text-white mb-8">
        I’m always open to exciting projects, collaborations, or just a chat. Feel free to connect with me!
      </p>
      <a
  href="mailto:stevenr2049@gmail.com"
  className={`inline-block py-2 px-4 rounded-sm shadow-md transition-all ${getButtonClasses()}`}
>
  Email Me
</a>

    </section>
  );
};

export default Contact;
