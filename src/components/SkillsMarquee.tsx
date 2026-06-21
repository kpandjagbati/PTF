interface Skill {
  id: number;
  name: string;
  level: string;
  image: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
}

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div className="group flex w-28 shrink-0 flex-col items-center px-3">
    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/60 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-info group-hover:shadow-lg group-hover:shadow-info/20">
        <img
          src={skill.image}
          alt={skill.name}
          className="h-full w-full rounded-full object-cover"
        />
    </div>
    <span className="mt-2 text-center text-sm font-medium">{skill.name}</span>
    <span className="text-center text-xs text-base-content/50">{skill.level}</span>
  </div>
);

const SkillsMarquee = ({ skills }: SkillsMarqueeProps) => {
  const loop = [...skills, ...skills];

  return (
    <div className="skills-marquee-wrapper relative mx-auto w-full max-w-5xl">
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

      <div className="skills-marquee-static hidden flex-wrap items-center justify-center gap-6 md:gap-8">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
