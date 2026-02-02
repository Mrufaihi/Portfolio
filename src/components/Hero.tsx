import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      heroRef.current &&
      titleRef.current &&
      subtitleRef.current &&
      buttonRef.current
    ) {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          },
          '-=0.4'
        );
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 pt-20 dotted-bg"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Ahmed</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          I'm a <span className="text-primary">Full Stack Engineer</span>.
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build modern web applications with a focus on user experience and
          performance. Passionate about creating scalable solutions and
          contributing to design systems.
        </p>
        <button
          ref={buttonRef}
          onClick={scrollToContact}
          className="px-8 py-4 bg-primary text-dark font-semibold text-lg rounded hover:bg-primary/90 transition-all hover:scale-105"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
