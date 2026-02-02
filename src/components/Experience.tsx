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
  return (
    <section id="experience" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Experience<span className="text-accent">.</span>
        </h2>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-xl text-accent mb-2">{item.company}</p>
                </div>
                <div className="text-right md:text-left md:ml-4">
                  <p className="text-[#F5F5F5] mb-1">{item.dates}</p>
                  <p className="text-[#D0D0D0] text-sm">{item.location}</p>
                </div>
              </div>

              <p className="text-[#E8E8E8] mb-4 leading-relaxed">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
