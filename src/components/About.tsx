import Title from "./Title"
import img from "../assets/image_cv2.jpeg"
import {  LetterText, Paintbrush } from "lucide-react"
    

const aboutSections = [
    {
        id: 1,
        title: "Front-end developer",
        description:"I specialize in creating dynamic and high-performance web applications using modern JavaScript frameworks such as React and Vue.js. My focus is on building complex and maintainable user interfaces with an emphasis on optimization, component reuse, and writing clear, tested code.",
        Icon: <LetterText className="text-info scale-150"/>,
    },
    {
        id: 2,
        title: "Back-end developer",
        description:"I have experience in building robust and scalable server-side applications using Node.js and Express. I am proficient in designing RESTful APIs, managing databases, and ensuring the security and performance of back-end systems.",
        Icon: <LetterText className="text-info scale-150"/>,
    },
    
    {
        id: 3,
        title: "UI/UX Designer",
        description:"I have a keen eye for design and user experience. I am skilled in creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction. My design process involves user research, wireframing, prototyping, and usability testing to ensure optimal user experiences.",
        Icon: <Paintbrush className="text-info scale-150"/>,
    },
]
const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32">
            <Title title="About Us"></Title>
            <div className="md:h-screen  flex justify-center items-center md:space-x-10 space-y-10 md:space-y-0 flex-col md:flex-row">
                <div className="hidden md:block">
                    <img
            src={img}
            alt=""
            className="w-96 object-cover  rounded-xl "
            
          />
                </div>


                <div className="md:ml-4 space-y-5">
                    {aboutSections.map((section)  => (
                        <div key={section.id}
                        className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-2xl md:w-96 shadow-2xl"
                        >
                            <div className="mb-2 md:0">
                                {section.Icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-2xl font-bold mb-1">
                                    {section.title }
                                </h2>
                                <p className="text-sm">
                                    {section.description} 
                                </p>
                            </div>
                        </div>
                    ))
                      
                    

                    }
                </div>

            </div>
        </div>
    )
}
export default About

 