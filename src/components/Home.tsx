import { motion } from 'framer-motion';
import { Mail } from "lucide-react"
import img from '../assets/image_cv.jpeg'
import { title3D, paragraph3D, button3D, image3D, container3D } from '../utils/animations';

interface HomeProps {
  onContactClick: () => void;
}

const Home = ({ onContactClick }: HomeProps) => {
  const title = "Hello, I'm Aristide KPANDJA".split(' ');

  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 px-4"
      initial="hidden"
      animate="visible"
      variants={container3D}
    >
      <div className="flex flex-col max-w-2xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center md:text-left mt-4 md:mt-0"
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
                <span className="text-info">{word} </span>
              ) : (
                word + ' '
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={container3D}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-6"
        >
          <motion.p
            className="my-4 text-md text-center md:text-left leading-relaxed"
            variants={paragraph3D}
            whileHover="hover"
          >
            I am a Software Engineer in Training <br className="hidden md:block" />
            Passionate about the modern JavaScript ecosystem,
            I specialize in creating dynamic and high-performance web applications. <br className="hidden md:block" />
            I excel at using frameworks such as React and Vue.js to architect complex and maintainable user interfaces.
            My approach to development focuses on optimization, component reuse, and writing clear, tested code.
            I am constantly on the lookout for best practices to ensure fast loading times and a smooth experience on all devices.
            Please contact me if you require my services.
          </motion.p>

          <motion.div
            variants={container3D}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <motion.button
              type="button"
              onClick={onContactClick}
              className="btn btn-info md:w-fit group"
              variants={button3D}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              Contactez-moi
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="md:ml-12 lg:ml-16 mt-10 md:mt-0"
        variants={image3D}
        whileHover="hover"
      >
        <div className="relative">
          <motion.img
            src={img}
            alt="Aristide KPANDJA"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-8 border-primary shadow-2xl"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)'
            }}
            whileHover={{
              rotateY: [0, 5, -5, 0],
              rotateX: [0, 3, -3, 0],
              transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
          <motion.div
            className="absolute -inset-4 -z-10 bg-info/20 rounded-full blur-xl opacity-70"
            animate={{
              scale: [1, 1.05, 1],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
