import { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Experiences from "../components/Experiences";
import PortfolioHub from "../components/PortfolioHub";

interface HomeContext {
  onContactClick: () => void;
}

const HomePage = () => {
  const { onContactClick } = useOutletContext<HomeContext>();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <div className="page-container py-6 md:py-8">
        <Home onContactClick={onContactClick} />
      </div>

      <About />

      <main className="page-container py-6 md:py-8">
        <Experiences />
        <PortfolioHub />
      </main>
    </>
  );
};

export default HomePage;
