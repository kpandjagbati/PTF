import Title from "./Title";
import img from "../assets/image_cv2.jpeg";
import { Layout, Server, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const aboutSections = [
  {
    id: 1,
    title: "Front-end Developer",
    description:
      "Interfaces modernes avec React, TypeScript et Tailwind CSS. Je m'attache à la performance, la réutilisabilité des composants et une UX soignée.",
    Icon: Layout,
  },
  {
    id: 2,
    title: "Back-end Developer",
    description:
      "APIs REST avec Node.js et Express, gestion de bases de données et bonnes pratiques de sécurité pour des applications fiables et scalables.",
    Icon: Server,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "Conception d'interfaces intuitives : recherche utilisateur, wireframes, prototypage et tests pour des expériences engageantes.",
    Icon: Paintbrush,
  },
];

const About = () => {
  return (
    <section id="about" className="section-spacing bg-base-300 mb-10 md:mb-24 overflow-hidden">
      <div className="page-container py-8 md:py-10">
        <Title title="À propos de moi" />
        <div className="flex justify-center items-center md:space-x-10 space-y-8 md:space-y-0 flex-col md:flex-row">
          <BlurFade inView delay={0.2} direction="left" className="shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto mx-auto md:mx-0">
            <motion.img
              src={img}
              alt="Aristide KPANDJA"
              className="w-full md:w-80 lg:w-96 max-h-[28rem] object-cover object-top rounded-2xl shadow-2xl ring-2 ring-info/20"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </BlurFade>

          <div className="md:ml-4 space-y-4 sm:space-y-5 w-full max-w-md mx-auto md:mx-0">
            {aboutSections.map((section, index) => (
              <BlurFade
                key={section.id}
                inView
                delay={0.15 + index * 0.1}
                direction="right"
              >
                <div className="card-hover flex flex-col sm:flex-row items-center bg-base-100 p-4 sm:p-5 rounded-2xl w-full shadow-lg border border-base-content/5">
                  <motion.div
                    className="mb-2 sm:mb-0 shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <section.Icon className="text-info w-8 h-8" />
                  </motion.div>
                  <div className="sm:ml-4 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-bold mb-1">{section.title}</h2>
                    <p className="text-sm text-base-content/75">{section.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
