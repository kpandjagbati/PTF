import { motion } from 'framer-motion';
import { Mail, FileDown } from "lucide-react";
import img from '../assets/image_cv.jpeg';
import FloatingParticles from './FloatingParticles';
import { title3D, paragraph3D, button3D, image3D, container3D } from '../utils/animations';

const CV_URL = "/CV_AristideKPANDJA.pdf";
const CV_FILENAME = "Aristide_Kpandja_CV.pdf";

interface HomeProps {
  onContactClick: () => void;
}

const techStack = ["React", "TypeScript", "Node.js"];

const Home = ({ onContactClick }: HomeProps) => {
  const title = "Hello, I'm Aristide KPANDJA".split(' ');

  return (
    <motion.section
      id="accueil"
      className="section-spacing relative flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 md:my-16 lg:my-24 my-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container3D}
    >
      <FloatingParticles />

      <div className="flex flex-col max-w-2xl relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left mt-4 md:mt-0 leading-tight"
        >
          {title.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-1 md:mr-2"
              custom={i}
              variants={title3D}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {word === 'Aristide' ? (
                <span className="text-gradient-animate">{word} </span>
              ) : (
                word + ' '
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2 justify-center md:justify-start mt-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className="badge badge-outline badge-info badge-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={container3D}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-6"
        >
          <motion.p
            className="my-4 text-md text-center md:text-left leading-relaxed text-base-content/80"
            variants={paragraph3D}
          >
            Passionné par l'écosystème JavaScript moderne, je conçois des applications web
            dynamiques et performantes avec React et TypeScript. Mon approche privilégie
            la qualité du code, la réutilisation des composants et une expérience fluide
            sur tous les appareils.
          </motion.p>

          <motion.div
            variants={container3D}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start"
          >
            <motion.button
              type="button"
              onClick={onContactClick}
              className="btn btn-info w-full sm:w-auto group btn-shine"
              variants={button3D}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              Contactez-moi
            </motion.button>
            <motion.a
              href={CV_URL}
              download={CV_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary w-full sm:w-auto group btn-shine"
              variants={button3D}
              whileHover="hover"
              whileTap="tap"
            >
              <FileDown className="mr-2 group-hover:scale-110 transition-transform" />
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="md:ml-12 lg:ml-16 mt-10 md:mt-0 shrink-0 relative z-10"
        variants={image3D}
      >
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto md:mx-0">
          <motion.div
            className="profile-blob profile-blob-glow profile-blob-animate absolute -inset-6 -z-10 opacity-80"
            aria-hidden
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="profile-blob profile-blob-ring profile-blob-animate w-full h-full overflow-hidden">
            <img
              src={img}
              alt="Aristide KPANDJA"
              className="profile-blob w-full h-full object-cover object-center bg-base-300"
            />
          </div>

          <motion.div
            className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-info shadow-lg shadow-info/50"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden
          />
          <motion.div
            className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            aria-hidden
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
