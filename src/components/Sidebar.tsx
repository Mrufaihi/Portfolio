import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.from(sidebarRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.2,
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      ref={sidebarRef}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <nav className="flex flex-col gap-6">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Exp.
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Contact
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
