import React from 'react';

const WelcomeContainer = () => {
  const capabilities = [
    {
      title: "Frontend Development",
      description:
        "Transforming your design into interactive, user-friendly experiences that delight your audience.",
    },
    {
      title: "Full Stack Development",
      description:
        "Building the user interface to developing the backend, database, and API connectivity.",
    },
    {
      title: "Responsive Websites",
      description:
        "Ensure your website adapts seamlessly to any device, guaranteeing a consistent and engaging experience.",
    },
    {
      title: "Web Extension Development",
      description:
        "Develop powerful, feature-rich browser extensions that enhance user experience and boost productivity.",
    },
  ];

  return (
    <section
      className="welcome-container relative bg-black bg-opacity-0 py-12 px-6"
      id="welcome"
    >
      <h2 className="text-4xl font-bold mb-8 text-black text-center">Welcome</h2>
      <p className="text-lg text-stone-800 max-w-4xl mx-auto text-center mb-12">
        Hi, Im Steven! A developer passionate about building dynamic, user-friendly, and visually engaging applications. Lets explore my capabilities and recent work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 p-6 rounded-lg shadow-md text-stone-100 hover:bg-black hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
          >
            <h4 className="text-xl font-bold mb-2 group-hover:text-white">
              {capability.title}
            </h4>
            <p className="text-stone-100 group-hover:text-stone-300">
              {capability.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeContainer;
