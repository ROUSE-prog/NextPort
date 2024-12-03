import React from 'react';

const Contact = () => {
  return (
    <section
      className=" bg-black bg-opacity-40 p-6 rounded-sm shadow-md text-stone-100 py-12 px-6 text-center max-w-2xl mx-auto my-12"
      id="contact"
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Contact / Connect</h2>
      <p className="text-lg text-white mb-8">
        I’m always open to exciting projects, collaborations, or just a chat. Feel free to connect with me!
      </p>
      <a
javascript
Copy code
        href="mailto:stevenr2049@gmail.com"
        className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;