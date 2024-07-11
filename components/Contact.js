const Contact = () => {
    return (
      <section id="contact" className="h-screen flex items-center justify-center bg-primary text-white z-10">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-accent hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  