const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // todo we might want it on the left side
    <aside className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:block">
      <nav className="flex flex-row gap-8 bg-white/5 border border-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
        <button
          onClick={() => scrollToSection('summary')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
        >
          Summary
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
        >
          Exp.
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-[#D0D0D0] hover:text-accent transition-colors text-sm font-medium"
        >
          Contact
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
