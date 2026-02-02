const About = () => {
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

  return (
    <section id="about" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About<span className="text-accent">.</span>
        </h2>

        <p className="text-lg text-[#F5F5F5] mb-12 max-w-3xl leading-relaxed">
          I'm a Full Stack Engineer currently working at Techrar, where I
          contribute to design systems and build scalable web applications. I'm
          passionate about creating clean, efficient code and exploring new
          technologies. <span className="text-accent">My links</span> →
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-2"
          >
            GitHub
          </a>
          ,
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-2"
          >
            LinkedIn
          </a>
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Use at work</h3>
            <div className="flex flex-wrap gap-3">
              {workSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E8E8E8] hover:border-accent/50 transition-colors"
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
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E8E8E8] hover:border-accent/50 transition-colors"
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
