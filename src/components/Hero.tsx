import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: function () {
          // Clear transform on button so CSS hover scale can work
          if (buttonRef.current) {
            gsap.set(buttonRef.current, { clearProps: 'transform' });
          }
        },
      });

      // Use fromTo to ensure elements are visible by default
      tl.fromTo(
        h1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          h2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          pRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // old regular radient bg
    // <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20 dotted-bg">
    //   <div className="max-w-4xl mx-auto text-center">

    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-20 relative"
      style={{
        backgroundImage: 'url(/images/disco_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h1 ref={h1Ref} className="text-6xl md:text-8xl font-bold mb-6">
          I'm <span className="text-accent">Mohammed Alrufaihi</span>
        </h1>
        <h2 ref={h2Ref} className="text-3xl md:text-5xl font-semibold mb-8">
          <span className="text-accent-light">Software Engineer</span>.
        </h2>
        {/* todo enhance tone minimal but professional. */}
        <p
          ref={pRef}
          className="text-lg md:text-xl text-[#F5F5F5] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Focused on building web applications with a strong Backend & Design
          foundation.
        </p>
        <button
          ref={buttonRef}
          onClick={scrollToContact}
          className="px-8 py-4 bg-accent text-white font-semibold text-lg rounded hover:bg-accent/90 transition-[colors,transform] duration-200 hover:scale-105"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
