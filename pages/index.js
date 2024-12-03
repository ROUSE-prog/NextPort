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
      image: "/images/patio.png",
      liveSite: 'https://pat-io.netlify.app/',
      description: 'Pat.io is an innovative AI-powered assistant designed to simplify Social Security processes. It offers multilingual support, accessibility features, and real-time updates. ', // URL of the live site
  github: 'https://github.com/ROUSE-prog/pat.io'
    },
    {
      title: "Weatherware",
      image: "/images/project2.png",
      description: 'Weatherware is an innovative, user-friendly weather application designed with React.js. It provides users with real-time weather information based on the provided location, including temperature and weather conditions.',
      liveSite: 'https://whatweatherware.netlify.app/', // URL of the live site
  github: 'https://github.com/ROUSE-prog/React/tree/main/Weatherware'
    },
    {
      title: "Code Journal",
      image: "/images/project3.png",
      description: 'This project aims to create an AI-powered documentation tracker that integrates with IDEs, summarizes code documentation, and displays it in a journal format on a web UI.',
  github: 'https://github.com/ROUSE-prog/code-journal'
    },
  ];

  return {
    props: {
      combinedWork,
    },
  };
}
