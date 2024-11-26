import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container bg-white bg-opacity-10 py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">Contact / Connect</h2>
      <p className="text-lg text-white mb-8">
        I'm always open to exciting projects, collaborations, or just a chat. Feel free to connect with me!
      </p>
      <a
        href="mailto:steven@example.com"
        className="inline-block bg-black bg-opacity-50 text-white py-3 px-6 rounded-lg shadow-md hover:bg-black hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
      >
        Email Me
      </a>
    </div>
  );
};

export default Contact;
