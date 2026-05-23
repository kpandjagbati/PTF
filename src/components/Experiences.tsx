import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgHTML from "../assets/techno/html.png";
import imgJS from "../assets/techno/js.png";
import imgNodeJS from "../assets/techno/node-js.png";
import imgReact from "../assets/techno/react.png";
import imgTailwind from "../assets/techno/tailwind.png";
import imgTypeScript from "../assets/techno/typescript.svg";
import imgNextJS from "../assets/techno/next-js.webp";
import imgPrisma from "../assets/techno/prisma.webp";

import NDC from "../assets/companies/NDC.jpeg";
import google from "../assets/companies/google.png";
import amazon from "../assets/companies/amazon.png";

const skills = [
    {id: 1, name: "HTML", level: "Advanced", image: imgHTML},
    {id: 2, name: "CSS", level: "Advanced", image: imgCSS},
    {id: 3, name: "JavaScript", level: "Advanced", image: imgJS},
    {id: 4, name: "TypeScript", level: "Intermediate", image: imgTypeScript},
    {id: 5, name: "React", level: "Advanced", image: imgReact},
    {id: 6, name: "Tailwind CSS", level: "Intermediate", image: imgTailwind},
    {id: 7, name: "Node.js", level: "Intermediate", image: imgNodeJS},
    {id: 8, name: "Next.js", level: "Intermediate", image: imgNextJS},
    {id: 9, name: "Prisma", level: "Intermediate", image: imgPrisma},
]

const experiences = [
    {
        id: 1,
        role: "software Engineer",
        company: "NDC",
        period: "jully 2025 - september 2025",
        description: [
            "Developed and maintained web applications using React and Node.js, enhancing user experience and functionality."
        ],
        image: NDC,
    },
    {
        id: 2,
        role: "full stack developer",
        company: "Google",
        period: "june 2024- september 2024",
        description: [
            "Collaborated with cross-functional teams to design and implement new features, resulting in a 15% increase in user engagement.",
        ],
        image: google,
    },
    {
        id: 4,
        role: "ui/ux designer",
        company: "Amazon",
        period: "november 2022 - december 2022",
        description: [
            "Developed and maintained web applications using React and Node.js, enhancing user experience and functionality."
        ],
        image: amazon,
    }
]

const Experiences = () => {
    return (
        <div>
           <Title title="Experiences"/>
           <div className="flex flex-col-reverse md: flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 w-full max-w-4xl mx-auto mt-5">
                {skills.map((skill) => (
                    <div key={skill.id} className="flex justify-center items-center flex-col">
                       <div className='w-24 h-24 p-2 rounded-full border-2 border-primary transition-transform duration-500 transform-3d hover:transform-[perspective(600px)_rotateX(12deg)_rotateY(-10deg)_scale(1.05)] hover:shadow-2xl'>
                            <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                        </div>
                       <span className="mt-3 text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>

            <div className="md:ml-4 flex flex-col space-y-4">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-2xl shadow-lg">
                        <div className="flex items-center">
                            <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                            <div className="ml-4">
                                <h1 className="font-bold text-xl text-info">{experience.role}, {experience.company}</h1>
                                <span className="text-sm">{experience.period}</span>
                            </div>
                        </div>
                        <ul className="list-disc ml-16 mt-2">
                            {experience.description.map((desc, index)=> (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                ))}
            </div>
           </div>
        </div>
    )
}
export default Experiences