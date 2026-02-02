interface Project {
  title: string;
  image: string;
  tech: string;
  description: string;
  github?: string;
  behance?: string;
  live?: string;
  isPrivate?: boolean;
}

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  devProjects: Project[];
  designProjects: Project[];
}

const Projects = ({ devProjects, designProjects }: ProjectsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const devProjectsRef = useRef<HTMLDivElement>(null);
  const designProjectsRef = useRef<HTMLDivElement>(null);

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

      // Animate dev projects
      if (devProjectsRef.current) {
        const projectCards = devProjectsRef.current.querySelectorAll(
          '[data-project-card]'
        );
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: devProjectsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            projectCards.forEach((card) => {
              gsap.set(card, { clearProps: 'transform' });
            });
          },
        });

        tl.fromTo(
          projectCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            immediateRender: false,
          }
        );
      }

      // Animate design projects
      if (designProjectsRef.current) {
        const projectCards = designProjectsRef.current.querySelectorAll(
          '[data-project-card]'
        );
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: designProjectsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
            fastScrollEnd: true,
          },
          onComplete: function () {
            projectCards.forEach((card) => {
              gsap.set(card, { clearProps: 'transform' });
            });
          },
        });

        tl.fromTo(
          projectCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            immediateRender: false,
          }
        );
      }
    },
    { scope: containerRef }
  );

  const renderProjectCard = (project: Project, index: number) => {
    const projectLink =
      project.behance || project.github || project.live || '#';

    return (
      <a
        key={index}
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        data-project-card
        className="block bg-primary border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-200 cursor-pointer"
      >
        <div className="aspect-video bg-white/5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
          <p className="text-accent text-sm mb-4">{project.tech}</p>
          <p className="text-[#E8E8E8] mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex items-center gap-3">
            {project.github && (
              <div className="flex items-center gap-2 text-[#D0D0D0]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-xs">GitHub</span>
              </div>
            )}
            {project.behance && (
              <div className="flex items-center gap-2 text-[#D0D0D0]">
                <img
                  src="/images/behance-square-color-icon.svg"
                  alt="Behance"
                  className="w-4 h-4"
                />
                <span className="text-xs">Behance</span>
              </div>
            )}
          </div>
        </div>
      </a>
    );
  };

  return (
    <section ref={containerRef} id="projects" className="relative">
      {/* Development Projects Section */}
      <div
        className="py-20 px-6 md:px-12 lg:px-20 relative"
        style={{
          backgroundImage: 'url(/images/disco_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12">
            Projects<span className="text-accent">.</span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-accent-light">
              Development
            </h3>
            <div
              ref={devProjectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {devProjects.map((project, index) =>
                renderProjectCard(project, index)
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-white/10"></div>

      {/* Design Projects Section */}
      <div
        className="py-20 px-6 md:px-12 lg:px-20 relative"
        style={{
          backgroundImage: 'url(/images/disco_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-accent-light">
              Design
            </h3>
            <div
              ref={designProjectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {designProjects.map((project, index) =>
                renderProjectCard(project, index)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
