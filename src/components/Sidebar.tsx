const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <nav className="flex flex-col gap-6">
        <button
          onClick={() => scrollToSection('about')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Exp.
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Contact
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
