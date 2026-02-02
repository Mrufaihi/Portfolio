import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SidebarV2 = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('summary');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useGSAP(
    () => {
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2,
            onComplete: function () {
              // Clear transform so clicks work properly
              gsap.set(this.targets(), { clearProps: 'transform' });
            },
          }
        );
      }
    },
    { scope: sidebarRef }
  );

  useEffect(() => {
    const handleScroll = () => {
      // Ignore scroll events during programmatic scrolling
      if (isScrollingRef.current) return;

      const sections = ['summary', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Set active section immediately
      setActiveSection(id);

      // Prevent scroll handler from interfering
      isScrollingRef.current = true;

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      section.scrollIntoView({ behavior: 'smooth' });

      // Re-enable scroll handler after smooth scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // Smooth scroll typically takes ~500-800ms
    }
  };

  const navItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <aside
      ref={sidebarRef}
      className="fixed left-0 top-0 bottom-0 w-20 z-40 hidden lg:flex flex-col bg-primary border-r border-white/10"
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-24 border-b border-white/10">
        <div className="text-white font-bold text-xl">
          A<span className="text-accent">.</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col py-6 gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center justify-center h-20 transition-colors duration-200 ${
                isActive
                  ? 'bg-[#282828] text-white font-bold'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent" />
              )}
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarV2;
