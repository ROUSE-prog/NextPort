const Hero = () => {
    return (
      <section id="hero" className="h-screen flex items-center justify-center bg-primary text-white text-center z-10">
        <div>
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Welcome to My Portfolio</h1>
          <p className="text-xl fade-in-up" style={{ animationDelay: '0.5s' }}>Showcasing my projects and skills</p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  