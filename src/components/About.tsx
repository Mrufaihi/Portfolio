import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const workSkills = [
    'Angular',
    'SASS',
    'Next.JS',
    'TypeScript',
    'Django',
    'GraphQL',
    'Fastify',
    'Github',
    'TailwindCSS',
  ];

  const funSkills = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'NodeJS',
    'Express',
    'Postgres',
    'MongoDB',
    'Heroku',
    'Django',
    'Python',
    'AWS',
    'Railway',
    'Fly.io',
    'Java',
    'MySQL',
    'Whimsical',
    'FastAPI',
    'CrewAI',
    'Langchain',
    'LangGraph',
  ];

  useEffect(() => {
    if (
      sectionRef.current &&
      titleRef.current &&
      textRef.current &&
      skillsRef.current
    ) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.skill-tag', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-dark-gray">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8">
          About<span className="text-primary">.</span>
        </h2>

        <p
          ref={textRef}
          className="text-lg text-white/80 mb-12 max-w-3xl leading-relaxed"
        >
          I'm a Full Stack Engineer currently working at Techrar, where I
          contribute to design systems and build scalable web applications. I'm
          passionate about creating clean, efficient code and exploring new
          technologies. <span className="text-primary">My links</span> →
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-2"
          >
            GitHub
          </a>
          ,
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-2"
          >
            LinkedIn
          </a>
        </p>

        <div ref={skillsRef} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Use at work</h3>
            <div className="flex flex-wrap gap-3">
              {workSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90 hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Use for fun</h3>
            <div className="flex flex-wrap gap-3">
              {funSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90 hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
