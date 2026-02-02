import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current && contentRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8">
          Contact<span className="text-primary">.</span>
        </h2>

        <div
          ref={contentRef}
          className="bg-dark-gray border border-white/10 rounded-lg p-8 md:p-12"
        >
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{' '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              Linkedin
            </a>{' '}
            or{' '}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              Twitter
            </a>{' '}
            if that's more your speed.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <svg
              className="w-6 h-6 text-primary"
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
              href="mailto:ahmed.hazmi24@gmail.com"
              className="text-xl text-white hover:text-primary transition-colors"
            >
              ahmed.hazmi24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
