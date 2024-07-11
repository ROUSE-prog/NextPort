import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import P5Background from '../components/P5Background';

const sections = [
  { id: 'hero', component: <Hero /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <P5Background />
      <div className="snap-container relative z-10">
        {sections.map((section, index) => (
          <div key={index} id={section.id} className="snap-item">
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}
