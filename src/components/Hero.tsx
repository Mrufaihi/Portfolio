import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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
      // Animate image first (fade in + scale up)
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
      )
        .fromTo(
          h1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4', // Start 0.4s before previous animation ends (overlap)
        )
        .fromTo(
          h2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4',
        )
        .fromTo(
          pRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3',
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3',
        );
    },
    { scope: containerRef },
  );

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20">
      <div
        ref={containerRef}
        className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"
      >
        {/* Left Column - Image with background */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-start items-center">
          <div
            ref={imageRef}
            className="relative w-1/2 md:w-full max-w-md md:max-w-lg max-h-[600px] aspect-[3/4] rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(/images/poster-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="w-full h-full">
              <img
                src="/images/mohammed-alrufaihi-transparant2.png"
                alt="Mohammed Alrufaihi"
                className="w-full h-full object-cover object-top rounded scale-125"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="text-center flex flex-col justify-center">
          <h1 ref={h1Ref} className="text-5xl md:text-7xl font-bold mb-4">
            I'm <span className="text-accent">Mohammed Alrufaihi</span>
          </h1>
          <h2 ref={h2Ref} className="text-2xl md:text-4xl font-semibold mb-6 ">
            <span className="text-accent-light">Software Engineer</span>.
          </h2>
          <p
            ref={pRef}
            className="text-lg md:text-xl text-[#F5F5F5] mb-8 leading-relaxed"
          >
            Focused on building web applications with a strong Backend & Design
            foundation.
          </p>
          <button
            ref={buttonRef}
            onClick={scrollToContact}
            className="px-8 py-4 bg-accent text-white font-semibold text-lg rounded hover:bg-accent/90 transition-[colors,transform] duration-200 hover:scale-105 self-center md:self-center mx-auto md:mx-0 "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
