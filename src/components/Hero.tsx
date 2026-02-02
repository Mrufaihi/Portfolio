const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 dotted-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          I'm <span className="text-accent">Mohammed Alrufaihi</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          a <span className="text-accent">Software Engineer</span>.
        </h2>
        <p className="text-lg md:text-xl text-[#F5F5F5] mb-12 max-w-2xl mx-auto leading-relaxed">
          I build modern web applications with a focus on user experience and
          performance. Passionate about creating scalable solutions and
          contributing to design systems.
        </p>
        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-accent text-white font-semibold text-lg rounded hover:bg-accent/90 transition-all hover:scale-105"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
