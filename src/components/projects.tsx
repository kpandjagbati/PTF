import Title from "./Title";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/projects5.jpg";
import project6 from "../assets/projects/project6.jpg";
import { Video, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "WEb App TimeTable",
    image: project1,
    description: "Responsive web application for creating and managing a weekly schedule.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://aris-dev-table.netlify.app/login_page",
    repoLink: "https://github.com/GOAT-12/cr-ateur-d-emploi-du-temps"

  },
  {
    id: 2,
    name: "Travel WebSite",
    image: project2,
    description: "Modern travel showcase website highlighting destinations and offers.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://site-voyage-arisdev.netlify.app/login.html?redirect=goat.html",
    repoLink: "https://github.com/GOAT-12/git-test"
  },
  {
    id: 3,
    name: "Marketing WebSite",
    image: project3,
    description: "Marketing landing page with hero section, services, and clear calls to action.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    name: "Portfolio",
    image: project4,
    description: "My developer portfolio built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 5,
    name: "inventory management app",
    image: project5,
    description: "Inventory management application to track products and inventory levels.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 6,
    name: "IA Integrated",
    image: project6,
    description: "Application integrating AI to automate tasks and improve the user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    repoLink: "#"
  },
];

const Projects = () => {
  return (
    <div className="mt-10">
      <Title title="Mes Projets" />
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img src={project.image} alt={project.name} className="w-full rounded-xl h-56 object-cover" />
            <div>
              <h1 className="my-2 font-bold">
                {project.name}
              </h1>
              <p className="text-sm"> {project.description}</p>
            </div>
            <div>
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-primary badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <div className="flex gap-2 mt-3">
                {project.demoLink && (
                  <a
                    className="btn btn-info btn-sm flex items-center gap-1"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Video className="w-5 h-5" />
                    <span>Démo</span>
                  </a>
                )}
                {project.repoLink && (
                  <a
                    className="btn btn-ghost btn-sm flex items-center gap-1"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects