import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Certifications from "./components/Certifications";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>

      <div className="p-5 md:px-[15%]">
         <Navbar/>
         <Home onContactClick={() => setShowContactForm(true)} />
      </div>

      <About/>

      <div className="p-5 md:px-[15%]">
      <Experiences/>
      <Certifications />
      <Projects/>
    </div>

     <Footer onContactClick={() => setShowContactForm(true)} />

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>    
  )
}
export default App
