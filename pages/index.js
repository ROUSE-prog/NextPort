import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import P5Background from '../components/P5Background';
import WelcomeContainer from '../components/WelcomeContainer';

export default function Home({ projects }) {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <P5Background />
      <div className="snap-container relative z-10">
        <div id="hero" className="snap-item">
          <WelcomeContainer />
        </div>
        <div id="projects" className="snap-item">
          <Projects projects={projects} />
        </div>
        <div id="contact" className="snap-item">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      title: "Project One",
      type: "Web Application",
      description: "This is a description of Project One. It is a web application built using React and Node.js.",
      image: "/images/project1.png",
    },
    {
      title: "Project Two",
      type: "Mobile Application",
      description: "This is a description of Project Two. It is a mobile application built using Flutter.",
      image: "/images/project2.png",
    },
    {
      title: "Project Three",
      type: "Desktop Application",
      description: "This is a description of Project Three. It is a desktop application built using Electron.",
      image: "/images/project3.png",
    },
    {
      title: "Project Four",
      type: "API Service",
      description: "This is a description of Project Four. It is an API service built using Python and Flask.",
      image: "/images/project4.png",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
