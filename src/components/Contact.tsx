import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
        }
      );

      // Animate contact card
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            // Clear transform so CSS can handle styles
            gsap.set(this.targets(), { clearProps: 'transform' });
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8">
          Contact<span className="text-accent">.</span>
        </h2>

        <div
          ref={cardRef}
          className="bg-primary border border-white/10 rounded-lg p-8 md:p-12"
        >
          <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed">
            Feel free to reach out via email if you'd like to connect. You can
            also find me on{' '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors duration-200"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://www.behance.net/mohammealrufai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors duration-200"
            >
              Behance
            </a>
            , or{' '}
            <a
              href="https://wa.me/966540584881"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors duration-200"
            >
              WhatsApp
            </a>{' '}
            — whichever works best for you.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:Malrufaihi@gmail.com"
                className="text-xl text-white hover:text-accent transition-colors duration-200"
              >
                Malrufaihi@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+966540584881"
                className="text-xl text-white hover:text-accent transition-colors duration-200"
              >
                +966-540584881
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
