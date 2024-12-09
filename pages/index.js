import React, { useState } from 'react';
import Header from '../components/Header';
import P5Background from '../components/P5Background';
import WelcomeContainer from '../components/WelcomeContainer';
import CombinedWork from '../components/CombinedWork';
import Playground from '../components/Playground';
import OpenProcessing from '../components/Openprocessing';
import Contact from '../components/Contact';

export default function Home({ combinedWork }) {
  const [activeTheme, setActiveTheme] = useState(''); // Track the selected theme

  return (
    <div className="relative h-screen overflow-hidden">
      {/* P5.js Background */}
      <div className="absolute inset-0 -z-10">
        <P5Background />
      </div>

      {/* Header */}
      <Header />

      {/* Snap Sections */}
      <div className="snap-container relative z-10 overflow-hidden">
        <section id="welcome" className="snap-item">
          <WelcomeContainer activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        </section>
        <section id="combined-work" className="snap-item">
          <CombinedWork activeTheme={activeTheme} combinedWork={combinedWork} />
        </section>
        <section id="playground" className="snap-item">
          <Playground activeTheme={activeTheme} />
        </section>
        <section id="openprocessing" className="snap-item">
          <OpenProcessing activeTheme={activeTheme} />
        </section>
        <section id="contact" className="snap-item">
          <Contact activeTheme={activeTheme} />
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
      description:
        'Pat.io is an innovative AI-powered assistant designed to simplify Social Security processes. It offers multilingual support, accessibility features, and real-time updates.',
      github: 'https://github.com/ROUSE-prog/pat.io',
    },
    {
      title: "Weatherware",
      image: "/images/project2.png",
      description:
        'Weatherware is a user-friendly weather application designed with React.js. It provides users with real-time weather information based on the provided location, including temperature and weather conditions.',
      liveSite: 'https://whatweatherware.netlify.app/',
      github: 'https://github.com/ROUSE-prog/React/tree/main/Weatherware',
    },
    {
      title: "Code Journal",
      image: "/images/project3.png",
      description:
        'This project aims to create an AI-powered documentation tracker that integrates with IDEs, summarizes code documentation, and displays it in a journal format on a web UI.',
      github: 'https://github.com/ROUSE-prog/code-journal',
    },
  ];

  return {
    props: {
      combinedWork,
    },
  };
}
