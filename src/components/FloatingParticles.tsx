import { motion } from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 4 + (i % 3) * 2,
  x: 10 + (i * 11) % 80,
  y: 5 + (i * 13) % 70,
  duration: 3 + (i % 4),
  delay: i * 0.3,
}));

const FloatingParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, p.id % 2 === 0 ? 8 : -8, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
