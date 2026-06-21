const orbs = [
  { className: "orb orb-1", size: "w-72 h-72", delay: "0s" },
  { className: "orb orb-2", size: "w-96 h-96", delay: "2s" },
  { className: "orb orb-3", size: "w-64 h-64", delay: "4s" },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {orbs.map((orb) => (
        <div key={orb.className} className={`${orb.className} ${orb.size}`} style={{ animationDelay: orb.delay }} />
      ))}
      <div className="grid-bg absolute inset-0 opacity-[0.03]" />
    </div>
  );
}
