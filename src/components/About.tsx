import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const frontendSkillsRef = useRef<HTMLDivElement>(null);
  const backendSkillsRef = useRef<HTMLDivElement>(null);
  const designSkillsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate title and text on scroll
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

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
        }
      );

      // Stagger animation for frontend skills
      if (frontendSkillsRef.current) {
        const frontendSkillElements =
          frontendSkillsRef.current.querySelectorAll('span');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: frontendSkillsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            frontendSkillElements.forEach((skill) => {
              gsap.set(skill, { clearProps: 'transform' });
            });
          },
        });

        tl.fromTo(
          frontendSkillElements,
          { opacity: 0, y: 15, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.2)',
            immediateRender: false,
          }
        );
      }

      // Stagger animation for backend skills
      if (backendSkillsRef.current) {
        const backendSkillElements =
          backendSkillsRef.current.querySelectorAll('span');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: backendSkillsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            backendSkillElements.forEach((skill) => {
              gsap.set(skill, { clearProps: 'transform' });
            });
          },
        });

        tl.fromTo(
          backendSkillElements,
          { opacity: 0, y: 15, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.2)',
            immediateRender: false,
          }
        );
      }

      // Stagger animation for design skills
      if (designSkillsRef.current) {
        const designSkillElements =
          designSkillsRef.current.querySelectorAll('span');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: designSkillsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            designSkillElements.forEach((skill) => {
              gsap.set(skill, { clearProps: 'transform' });
            });
          },
        });

        tl.fromTo(
          designSkillElements,
          { opacity: 0, y: 15, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.2)',
            immediateRender: false,
          }
        );
      }
    },
    { scope: containerRef }
  );

  // Frontend Skills - Primary skills
  const frontendSkills = [
    'HTML/CSS',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'React',
    'Svelte',
    'Angular',
    'Shadcn',
    'Git',
  ];

  // Frontend Skills - Secondary/General Knowledge (yellow border)
  const frontendSecondarySkills = [
    'Chakra UI',
    'Material UI',
    'Framer Animations',
    'Svelte Animations',
    'Prompt Engineering',
  ];

  // Backend Skills - Primary skills
  const backendSkills = ['Django', 'AI Development', 'LLMs', 'Firebase'];

  // Backend Skills - Secondary/General Knowledge (yellow border)
  const backendSecondarySkills = [
    'Azure Doc AI',
    'Pydantic AI',
    'Lang Chain AI',
    'MariaDB',
    'FastAPI',
    'Python',
  ];

  // Design (UX/UI) Skills - Primary skills
  const designSkills = ['Figma', 'UX Research', 'Maze', 'Jira'];

  // Design (UX/UI) Skills - Secondary/General Knowledge (yellow border)
  const designSecondarySkills = ['Affinity', 'Mockups', 'Animation Videos'];

  return (
    <section
      ref={containerRef}
      id="summary"
      className="py-20 px-6 md:px-12 lg:px-20 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8">
          Summary<span className="text-accent">.</span>
        </h2>

        <p
          ref={textRef}
          className="text-lg text-[#F5F5F5] mb-12 max-w-3xl leading-relaxed"
        >
          Software Engineer focused on building web applications with an
          end-to-end perspective. By connecting technical logic with user
          experience, I ensure products are intuitive and impactful. As an
          award-winning project lead, I take full responsibility for my work and
          daily growth. My goal is to build technologies that empower people and
          leave a strong, lasting mark on the community. I bring together
          frontend development, backend architecture, and UX/UI design expertise
          to create seamless digital experiences that solve real-world problems.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div ref={frontendSkillsRef} className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E8E8E8] hover:border-accent/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
              {frontendSecondarySkills.map((skill, index) => (
                <span
                  key={`secondary-${index}`}
                  className="px-4 py-2 bg-white/5 border border-accent-light/50 rounded-full text-sm text-[#E8E8E8] hover:border-accent-light transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div ref={backendSkillsRef} className="flex flex-wrap gap-3">
              {backendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E8E8E8] hover:border-accent/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
              {backendSecondarySkills.map((skill, index) => (
                <span
                  key={`secondary-${index}`}
                  className="px-4 py-2 bg-white/5 border border-accent-light/50 rounded-full text-sm text-[#E8E8E8] hover:border-accent-light transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Design (UX/UI)</h3>
            <div ref={designSkillsRef} className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E8E8E8] hover:border-accent/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
              {designSecondarySkills.map((skill, index) => (
                <span
                  key={`secondary-${index}`}
                  className="px-4 py-2 bg-white/5 border border-accent-light/50 rounded-full text-sm text-[#E8E8E8] hover:border-accent-light transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#D0D0D0] italic mt-6">
            <span className="text-accent">*</span> Skills with yellow borders
            indicate secondary knowledge or general familiarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
