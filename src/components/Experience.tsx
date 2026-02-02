import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  tech: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.experience-item', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 bg-dark-gray"
    >
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12">
          Experience<span className="text-primary">.</span>
        </h2>

        <div ref={itemsRef} className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-xl text-primary mb-2">{item.company}</p>
                </div>
                <div className="text-right md:text-left md:ml-4">
                  <p className="text-white/80 mb-1">{item.dates}</p>
                  <p className="text-white/60 text-sm">{item.location}</p>
                </div>
              </div>

              <p className="text-white/70 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
