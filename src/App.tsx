import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Projects data - inline array
const projects = [
  {
    title: 'Miras',
    image: '/images/miras.jpg',
    tech: 'NuxtJS - Python - FastAPI',
    description:
      'A comprehensive platform for managing and tracking projects with advanced features.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'SARC',
    image: '/images/sarc.jpg',
    tech: 'React - Node.js - MongoDB',
    description:
      'Social application for connecting communities and sharing resources.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Inventory Management System',
    image: '/images/inventory.jpg',
    tech: 'Next.js - Django - PostgreSQL',
    description:
      'Enterprise-grade inventory management solution with real-time tracking.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

// Experience data - inline array
const experience = [
  {
    title: 'Full Stack Engineer',
    company: 'Techrar',
    location: 'Jeddah',
    dates: '2024/09 - Present',
    description:
      'Working on design systems and full-stack development. Contributing to scalable web applications using modern technologies.',
    tech: [
      'Angular',
      'SASS',
      'Next.JS',
      'TypeScript',
      'Django',
      'GraphQL',
      'Fastify',
      'Github',
      'TailwindCSS',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Tuwaiq Academy Internship',
    location: 'Riyadh',
    dates: '2023/06 - 2023/09',
    description:
      'Intensive full-stack development program focusing on modern web technologies and best practices.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer',
    company: 'Freelancer',
    location: 'Remote',
    dates: '2022/01 - 2024/08',
    description:
      'Developed custom web applications for various clients, focusing on user experience and performance.',
    tech: ['JavaScript', 'React', 'Python', 'Django', 'AWS', 'Docker'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
