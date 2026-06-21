import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectsDevPage from "./pages/ProjectsDevPage";
import ProjectsDesignPage from "./pages/ProjectsDesignPage";
import ProjectsDesignGroupPage from "./pages/ProjectsDesignGroupPage";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              onContactClick={() => setShowContactForm(true)}
              showContactForm={showContactForm}
              onCloseContact={() => setShowContactForm(false)}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route
            path="/certifications"
            element={
              <main className="p-5 md:px-[15%]">
                <CertificationsPage />
              </main>
            }
          />
          <Route
            path="/projets/developpement"
            element={
              <main className="p-5 md:px-[15%]">
                <ProjectsDevPage />
              </main>
            }
          />
          <Route
            path="/projets/design"
            element={
              <main className="p-5 md:px-[15%]">
                <ProjectsDesignPage />
              </main>
            }
          />
          <Route
            path="/projets/design/:rubric"
            element={
              <main className="p-5 md:px-[15%]">
                <ProjectsDesignGroupPage />
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
