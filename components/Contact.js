import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container bg-amber-100 bg-opacity-50 py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact / Connect</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to exciting projects, collaborations, or just a chat. Feel free to connect with me!
      </p>
      <a
        href="mailto:steven@example.com"
        className="inline-block bg-stone-800 bg-opacity-50 text-white py-3 px-6 rounded-lg shadow-md hover:bg-stone-500"
      >
        Email Me
      </a>
    </div>
  );
};

export default Contact;
