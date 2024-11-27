import Header from '../components/Header';
import P5Background from '../components/P5Background';
import WelcomeContainer from '../components/WelcomeContainer';
import Playground from '../components/Playground';
import Openprocessing from '../components/Openprocessing';
import CombinedWork from '../components/CombinedWork';
import Contact from '../components/Contact';


export default function Home({ combinedWork }) {
  return (
    <div className="relative overflow-hidden">
      <P5Background />
     <Header />
      <div className="snap-container relative z-10">
        <section id="welcome" className="snap-item animate-fadeIn">
          <WelcomeContainer />
        </section>
        <section id="combined-work" className="snap-item animate-fadeIn">
          <CombinedWork combinedWork={combinedWork} />
        </section>
        <section id="Playground" className="snap-item animate-fadeIn">
        <Playground /> 
        </section>
        <section id="openprocessing" className="snap-item animate-fadeIn">
        <Openprocessing />
      </section>
        <section id="contact" className="snap-item animate-fadeIn">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const combinedWork = [
    {
      title: "Pat.Io",
      type: "Web Application",
      image: "/images/patio.png",
    },
    {
      title: "Weatherware",
      type: "Mobile Application",
      image: "/images/project2.png",
    },
    {
      title: "Code Journal",
      type: "Desktop Application",
      image: "/images/project3.png",
    },
    {
      title: "Cat Fighter IV",
      type: "API Service",
      image: "/images/project4.png",
    },
    {
      title: "Landing Page Redesign",
      type: "UI/UX Design",
      description: "Redesigned a client's landing page for improved user engagement.",
      image: "/images/recent1.png",
    },
    {
      title: "OpenProcessing Generative Art",
      type: "Creative Coding",
      description: "A collection of generative art experiments and creative coding projects.",
      image: "/images/openprocessing.png",
      link: "https://openprocessing.org/user/320947/?view=activity&o=18",
    },
  ];

  return {
    props: {
      combinedWork,
    },
  };
}
