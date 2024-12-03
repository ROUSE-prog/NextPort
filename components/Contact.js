import React from 'react';

const Contact = () => {
  return (
    <section
      className=" bg-sky-700  bg-opacity-40 p-6 rounded-sm shadow-md text-sky-100 py-12 px-6 text-center max-w-2xl mx-auto my-12  hover:bg-sky-900 hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
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
        className="inline-block bg-gradient-to-r  bg-sky-500 text-sky-100 py-2 px-4 rounded-sm shadow-md hover:from-sky-500 hover:to-orange-200 hover:text-sky-900 hover:shadow-lg transition-all"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;