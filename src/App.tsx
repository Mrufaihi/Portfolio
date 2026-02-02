import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar'; // Old sidebar - commented out
import SidebarV2 from './components/SidebarV2'; // New full-height sidebar
import Hero from './components/Hero';
import Summary from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Development Projects
const devProjects = [
  {
    title: 'Finpal',
    image: '/images/projects/finpal.png',
    tech: 'AI Development - LLMs - Data Extraction',
    description:
      'Top 20 AI project of the year at UJ AIIT Conference. Automatically extracts data from receipts and provides an AI assistant that understands your spending patterns.',
    github: 'https://github.com/Finpal-Org/finpal-2',
  },
  {
    title: 'Jawliner Saudi',
    image: '/images/projects/Jawliner-saudi.png',
    tech: 'Salla Partner - Custom Theme Development',
    description:
      'Fully custom theme integrated with Salla services for Salla client (Jawliner Saudi).',
    github: 'https://github.com/Mrufaihi/Jawliner',
    isPrivate: true,
  },
  {
    title: 'Mayar',
    image: '/images/projects/Mayar.png',
    tech: 'Finance Analysis - Web Application',
    description:
      'Credit Analysis Banking System with UX/UI design and functional implementation.',
    github: 'https://github.com/Mrufaihi/Capstone-4-Finanace-Analysis',
    isPrivate: true,
  },
  {
    title: 'Find My Service',
    image: '/images/projects/find-my-service.png',
    tech: 'AI-Powered Service Finder',
    description:
      'A modern web application that helps users find service providers near them using AI-powered search.',
    github: 'https://github.com/Mrufaihi/Find-My-Service-Project',
  },
  {
    title: 'Video Game Hub',
    image: '/images/projects/video-game-hub.png',
    tech: 'React - TypeScript - Game API',
    description:
      'A web application built with React and TypeScript that allows users to search and explore video games.',
    github: 'https://github.com/Mrufaihi/Video-Game-Hub',
  },
];

// Design Projects
const designProjects = [
  {
    title: 'Meyar',
    image: '/images/projects/design/mayar.png',
    tech: 'UX/UI Case Study - Credit Analysis',
    description:
      'UX/UI Case Study for Credit Analysis Web App. Enterprise Credit Analysis Platform designed to streamline financial evaluation.',
    behance:
      'https://www.behance.net/gallery/242939073/Meyar-UXUI-Case-Study-for-Credit-Analysis-Web-App',
  },
  {
    title: 'Manar',
    image: '/images/projects/design/manar.png',
    tech: 'UX/UI Case Study - Navigation App',
    description:
      'AlHaramain Navigational App. Interactive map providing real-time navigation with live path monitoring and multilingual ritual guidance.',
    behance:
      'https://www.behance.net/gallery/243329373/Manar-AlHaramain-Navigational-App-UXUI-Case-Study',
  },
  {
    title: 'Fakeeh Care',
    image: '/images/projects/design/fakeeh.png',
    tech: 'UX Enhancement - Case Study',
    description:
      'UX Enhancement Case Study for Fakeeh Care. Healthcare app redesign focusing on improved user experience.',
    behance:
      'https://www.behance.net/gallery/242370349/Fakeeh-Care-UX-Enhancement-Case-Study',
  },
  {
    title: 'Game Awards',
    image: '/images/projects/design/game-awards.png',
    tech: 'Mobile App Redesign',
    description:
      'Game Awards App Redesign. UI redesign focusing on best practices, Auto Layout & Components.',
    behance:
      'https://www.behance.net/gallery/240951919/Game-Awards-App-(Redesigned)',
  },
];

// Experience data - inline array (sorted by date, most recent first)
const experience = [
  {
    title: 'UX/UI Designer (Elite Student)',
    company: 'Tuwaiq UX/UI Bootcamp',
    location: 'Riyadh',
    dates: '11/2025 – 01/2026',
    description:
      '• Meyar: Credit Analysis Banking System (Functional). UX/UI Double Diamond, Design System.\n• Manar: AlHaramain real-time navigation Guide. UX/UI, Design Sprints, Design System.\n• Fakeeh Hospital: UX research & Redesign. Design Thinking, Design System.\n• The Game Awards: Event Redesign. UI best practices, Auto Layout & Components.',
    tech: [
      'Figma',
      'UX Research',
      'Design System',
      'Design Thinking',
      'Double Diamond',
      'Design Sprints',
      'Maze',
    ],
  },
  {
    title: 'Freelance Web Developer (Salla)',
    company: 'Freelance',
    location: 'Remote',
    dates: '06/2025 – 11/2025',
    description:
      'Designed & developed fully custom theme integrated with Salla services for my client (Jawliner Saudi).',
    tech: ['Salla', 'Custom Theme Development', 'Web Development', 'Tailwind'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Techrar Startup',
    location: 'Jeddah',
    dates: '01/2025 – 03/2025',
    description:
      '• Redesigned signup loaders to stop drop-offs after 13s wait, recovering 80%+ of users.\n• Handled ~15% of team workload while adapting to changing requirements and tight deadlines.\n• Learned Angular in 2 weeks to ship features including form validation and API integration.\n• Replaced legacy SCSS with Tailwind CSS to reduce complexity and unify the design system.\n• Managed collaborative workflows using Git while communicating with business and design teams.\n• Bridged communication across owners, designers & backend teams to align software with business goals.',
    tech: [
      'Angular',
      'Tailwind CSS',
      'TypeScript',
      'Git',
      'SCSS',
      'API Integration',
      'React',
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      {/* <Sidebar /> Old sidebar - commented out */}
      <SidebarV2 />
      <main className="lg:pl-20">
        <Hero />
        <Summary />
        <Projects devProjects={devProjects} designProjects={designProjects} />
        <Experience experience={experience} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
