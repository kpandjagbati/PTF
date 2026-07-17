interface Skill {
  id: number;
  name: string;
  level: string;
  image: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
}

const SkillItem = ({ skill, compact = false }: { skill: Skill; compact?: boolean }) => (
  <div className={`group flex shrink-0 flex-col items-center ${compact ? "w-20 px-1" : "w-24 sm:w-28 px-2 sm:px-3"}`}>
    <div
      className={`flex items-center justify-center rounded-full border-2 border-primary/60 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 ${
        compact ? "h-16 w-16" : "h-16 w-16 sm:h-20 sm:w-20"
      }`}
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
    <span className="mt-2 text-center text-xs sm:text-sm font-medium">{skill.name}</span>
    <span className="text-center text-[10px] sm:text-xs text-base-content/50">{skill.level}</span>
  </div>
);

const SkillsMarquee = ({ skills }: SkillsMarqueeProps) => {
  const loop = [...skills, ...skills];

  return (
    <div className="skills-marquee-wrapper relative mx-auto w-full max-w-5xl">
      <div className="skills-marquee-animated hidden md:block">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-base-100 to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-base-100 to-transparent sm:w-20"
          aria-hidden
        />

        <div className="overflow-hidden">
          <div className="skills-marquee-track flex w-max items-start">
            {loop.map((skill, index) => (
              <SkillItem key={`${skill.id}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="skills-marquee-static flex flex-wrap items-start justify-center gap-4 sm:gap-6 md:hidden">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} compact />
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
