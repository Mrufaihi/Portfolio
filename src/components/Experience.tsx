interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  tech: string[];
}

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const experienceItemsRef = useRef<HTMLDivElement>(null);

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

      // Animate experience items sequentially from top to bottom - simple fade and slide
      if (experienceItemsRef.current) {
        const experienceCards = experienceItemsRef.current.querySelectorAll(
          'div[data-experience-item]'
        );
        gsap.fromTo(
          experienceCards,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: experienceItemsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
              fastScrollEnd: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-20 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12">
          Experience<span className="text-accent">.</span>
        </h2>

        <div ref={experienceItemsRef} className="relative">
          {/* Single continuous vertical line - hidden on small screens */}
          {/* Calculation: date width (128/144) + gap (32/48) + timeline center (16/20) = 176/212 */}
          <div className="hidden md:block absolute left-[176px] md:left-[212px] top-0 bottom-0 w-0.5 bg-accent/30"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                data-experience-item
                className="flex gap-8 md:gap-12 relative"
              >
                {/* Dates - Far Left (hidden on small screens) */}
                <div className="hidden md:flex w-32 md:w-36 flex-shrink-0 items-center">
                  <p className="text-[#F5F5F5] text-sm md:text-base whitespace-nowrap">
                    {item.dates}
                  </p>
                </div>

                {/* Timeline dot column - hidden on small screens */}
                <div className="hidden md:flex flex-shrink-0 w-8 md:w-10 items-center justify-center relative">
                  {/* Dot - centered in column, intersects with line */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-accent border-2 border-primary"></div>
                  </div>
                </div>

                {/* Job Details - Single column on small screens */}
                <div className="flex-1 pb-12">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xl text-accent mb-2">{item.company}</p>
                    {/* Date shown below company on small screens */}
                    <p className="md:hidden text-[#F5F5F5] text-sm mb-2">
                      {item.dates}
                    </p>
                    <p className="text-[#D0D0D0] text-sm mb-4">
                      {item.location}
                    </p>
                  </div>

                  <p className="text-[#E8E8E8] mb-4 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#E8E8E8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
